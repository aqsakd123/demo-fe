import axiosInstance from '@app/api/axios'
import TextEditorField from '@app/components/common/Editor/TextEditorField'
import QuillEditor from '@app/components/common/QuillEditor/QuillEditor'
import { StrictModeDroppable } from '@app/components/common/StrictModeDroppable/StrictModeDroppable'
import TextInputField from '@app/components/common/TextInputField/TextInputField'
import React, { useState, useEffect } from 'react'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'

// Define types for Item and WebSocketMessage
interface Item {
  id: number
  name: string
  description: string
  displayOrder: number
}

interface WebSocketMessage {
  action: 'INSERT' | 'UPDATE' | 'DELETE'
  item: Item
}

// Reorder function for drag-and-drop
const reorder = (list: Item[], startIndex: number, endIndex: number): Item[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const WebSocketComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null)
  const [userId, setUserId] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!userId) return
    // Fetch initial data from the API
    axiosInstance
      .get<Item[]>('/api/items/all')
      .then((response) => setItems(response.data))
      .catch((error) => console.error('Error fetching initial data:', error))

    // Setup WebSocket connection
    const socket = new WebSocket(`ws://localhost:8080/ws/data?userId=${userId}`)

    socket.onopen = () => {
      console.log('WebSocket connection opened')
    }

    socket.onmessage = (event: MessageEvent) => {
      const { action, item }: WebSocketMessage = JSON.parse(event.data)

      switch (action) {
        case 'INSERT':
          setItems((prevItems) => [...prevItems, item])
          break
        case 'UPDATE':
          setItems((prevItems) =>
            prevItems
              .map((i) => (i.id === item.id ? item : i))
              .sort((a: Item, b: Item) => a.displayOrder - b.displayOrder),
          )
          break
        case 'DELETE':
          setItems((prevItems) =>
            prevItems
              .filter((i) => i.id !== item.id)
              .sort((a: Item, b: Item) => a.displayOrder - b.displayOrder),
          )
          break
        default:
          console.warn('Unknown action:', action)
      }
    }

    socket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    socket.onclose = () => {
      console.log('WebSocket connection closed')
    }

    setWebSocket(socket)

    return () => {
      socket.close()
    }
  }, [userId])

  const getNewDisplayOrder = (dragItemIndex: number, index: number): number => {
    if (index === 0) {
      return items[0].displayOrder / 2
    } else if (index === items.length - 1) {
      return items[items.length - 1].displayOrder + 1
    } else {
      const startIndex = dragItemIndex > index ? index - 1 : index
      const endIndex = dragItemIndex > index ? index : index + 1
      return (items[startIndex].displayOrder + items[endIndex].displayOrder) / 2
    }
  }

  // Handle drag-and-drop event
  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }
    const reorderedItems = reorder(items, source.index, destination.index)
    const newDisplayOrder = getNewDisplayOrder(source.index, destination.index)

    const updatedItem = {
      ...reorderedItems[destination.index],
      displayOrder: newDisplayOrder,
    }
    setItems(reorderedItems.map((i) => (i.id === updatedItem.id ? updatedItem : i)))

    try {
      await axiosInstance.post('/api/items/change-status', {
        action: 'CHANGE_DISPLAY',
        item: updatedItem,
      })
    } catch (error) {
      console.error('Error updating display order:', error)
    }
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 16,
                        border: '1px solid #ccc',
                        marginBottom: 8,
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.name} (Display Order: {item.displayOrder})
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  )
}

export default WebSocketComponent
