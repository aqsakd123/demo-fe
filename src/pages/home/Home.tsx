import React, { useState } from 'react'
import Type1Item from './CodeBlockTypeComponent/Type1Item'
import Type2Item from './CodeBlockTypeComponent/Type2Item'
import { RootState } from '@app/store/store'
import { useSelector } from 'react-redux'
import Type3Item from './CodeBlockTypeComponent/Type3Item'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import { DragDropContext, Draggable, DropResult, ResponderProvided } from 'react-beautiful-dnd'
import { StrictModeDroppable } from '@app/components/common/StrictModeDroppable/StrictModeDroppable'

export enum POSITION {
  START = 'START',
  END = 'END',
}

interface Param {
  id: number
  name: string
  value: string
}

interface Item {
  id?: string
  temporaryUUID?: string
  row: number
  sequence: number
  type: number
  uuidCodeCommon?: string
  uuidFunctional?: string
  indexFunctional?: number
  position?: POSITION
  content: string
  params?: Param[]
}

const StyledHome = styled.div`
  width: 100%;
  overflow: auto;
  padding: 20px;
  border: 1px solid gray;

  .row {
    display: flex;
    flex-direction: row;
  }

  .list-container {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .list {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid gray;
    padding: 10px;
    width: 25%;
    color: #1e1e1e;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  .list-header {
    border-bottom: 1px solid #c5c6c7;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  .list-item {
    margin-bottom: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border: 1px solid gray;
    padding: 0 15px;
    background-color: wheat;
  }

  .list-item-header {
    margin: 0;
    font-size: 1.1em;
  }

  .list-item-content,
  .list-item-ul {
    margin: 5px 0 0 0;
  }

  .list-item-ul {
    padding-left: 20px;
  }
`

const initialItems: Item[] = [
  { id: '1', row: 1, sequence: 1, type: 1, content: 'HELLO WORLD' },
  {
    id: '2',
    row: 1,
    sequence: 2,
    type: 2,
    uuidCodeCommon: 'uuid_type_2_code_comment',
    content: '',
    params: [
      { id: 1, name: 'name', value: 'abcxyz' },
      { id: 2, name: 'name2', value: 'abcxyz2' },
    ],
  },
  {
    id: '3',
    row: 2,
    sequence: 1,
    type: 1,
    content: '               ',
  },
  {
    id: '4',
    row: 2,
    sequence: 2,
    type: 3,
    uuidFunctional: '08p3u81u32480fjdhjsdhjhdsf',
    indexFunctional: 1,
    content: '',
    position: POSITION.START,
  },
  {
    id: '5',
    row: 2,
    sequence: 3,
    type: 1,
    content: '               ',
  },

  { id: '6', row: 3, sequence: 1, type: 1, content: 'ROW 3 ITEM 1' },
  { id: '7', row: 3, sequence: 2, type: 1, content: 'ROW 3 ITEM 2' },
  { id: '8', row: 4, sequence: 1, type: 1, content: 'ROW 4 ITEM 1' },
  { id: '9', row: 4, sequence: 2, type: 1, content: 'ROW 4 ITEM 2' },
  {
    id: '10',
    row: 5,
    sequence: 1,
    type: 1,
    content:
      'ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1',
  },
  {
    id: '11',
    row: 5,
    sequence: 2,
    type: 1,
    content: 'ROW 5 ITEM 2ROW 5 ITEM 2ROW 5 ITEM ITEM 2ROW 5 ITEM 2',
  },
  {
    id: '12',
    row: 6,
    sequence: 1,
    type: 1,
    content: '               ',
  },

  {
    id: '13',
    row: 6,
    sequence: 2,
    type: 3,
    uuidFunctional: '08p3u81u32480fjdhjsdhjhdsf',
    indexFunctional: 1,
    content: '',
    position: POSITION.END,
  },
  {
    id: '14',
    row: 6,
    sequence: 3,
    type: 1,
    content: '               ',
  },

  { id: '15', row: 8, sequence: 1, type: 1, content: 'ROW 8 ITEM 1' },
  {
    id: '16',
    row: 9,
    sequence: 1,
    type: 3,
    uuidFunctional: '08p3u81u32480fjdhjsdhjhdsf',
    indexFunctional: 2,
    content: '',
    position: POSITION.START,
  },
  { id: '17', row: 10, sequence: 1, type: 1, content: 'ROW 10 ITEM 1' },
  { id: '18', row: 11, sequence: 2, type: 1, content: 'ROW 11 ITEM 2' },
  { id: '19', row: 10, sequence: 1, type: 1, content: 'ROW 10 ITEM 1' },
  { id: '82', row: 11, sequence: 2, type: 1, content: 'ROW 11 ITEM 2' },
  {
    id: '21',
    row: 12,
    sequence: 1,
    type: 1,
    content:
      'ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1ROW 5 ITEM 1',
  },
  {
    id: '22',
    row: 12,
    sequence: 2,
    type: 1,
    content: 'ROW 5 ITEM 2ROW 5 ITEM 2ROW 5 ITEM ITEM 2ROW 5 ITEM 2',
  },

  {
    id: '23',
    row: 14,
    sequence: 1,
    type: 3,
    uuidFunctional: '08p3u81u32480fjdhjsdhjhdsf',
    indexFunctional: 2,
    content: '',
    position: POSITION.END,
  },
]

const assignTemporaryUUIDs = (items: Item[]): Item[] => {
  return items.map((item) => ({
    ...item,
    temporaryUUID: item.temporaryUUID ?? item.id ?? uuidv4(),
  }))
}

const Home: React.FC = () => {
  const { functionalList, codeCommonList } = useSelector((state: RootState) => state.projectStore)
  const [items, setItems] = useState<Item[]>(assignTemporaryUUIDs(initialItems))

  // 4. Handle content change
  const handleChange = (temporaryUUID: string, newContent: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.temporaryUUID === temporaryUUID ? { ...item, content: newContent } : item,
      ),
    )
  }

  const mergeItems = (items: Item[]) => {
    const mergedItems: Item[] = []
    let previousItem: Item | null = null

    for (const item of items) {
      if (
        previousItem &&
        previousItem.row === item.row &&
        previousItem.type === 1 &&
        item.type === 1
      ) {
        previousItem.content += ' ' + item.content
      } else {
        if (previousItem) {
          mergedItems.push(previousItem)
        }
        previousItem = { ...item }
      }
    }

    if (previousItem) {
      mergedItems.push(previousItem)
    }

    return mergedItems
  }

  // Directly update state items after merging
  const updateMergedItems = () => {
    const groupedItems = items.reduce<{ [key: number]: Item[] }>((acc, item) => {
      if (!acc[item.row]) {
        acc[item.row] = []
      }
      acc[item.row].push(item)
      return acc
    }, {})

    // Merge items within each row
    Object.keys(groupedItems).forEach((rowKey) => {
      groupedItems[Number(rowKey)] = mergeItems(groupedItems[Number(rowKey)])
    })

    // Flatten the grouped items and update state
    const mergedItems: Item[] = []
    Object.values(groupedItems).forEach((group) => {
      mergedItems.push(...group)
    })

    if (mergedItems?.length !== items.length) {
      setItems(mergedItems)
    }
  }

  // 7. Update merged items when items change
  React.useEffect(() => {
    updateMergedItems()
  }, [items])

  // 7. Group items by row and merge them if needed
  const groupedItems = items.reduce<{ [key: number]: Item[] }>((acc, item) => {
    if (!acc[item.row]) {
      acc[item.row] = []
    }
    acc[item.row].push(item)
    return acc
  }, {})

  // Merge items within each row
  Object.keys(groupedItems).forEach((rowKey) => {
    groupedItems[Number(rowKey)] = mergeItems(groupedItems[Number(rowKey)])
  })

  const handleDeleteCodeCommon = (temporaryUUID: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.temporaryUUID !== temporaryUUID))
  }

  const handleDeleteFunctional = (
    uuid: string,
    indexFunctional: number,
    deleteOption: 'ALL' | 'SINGLE' | 'CANCEL',
  ) => {
    if (deleteOption === 'ALL') {
      const startItem: Item | undefined = items.find(
        (item) =>
          item.uuidFunctional === uuid &&
          item.indexFunctional === indexFunctional &&
          item.position === POSITION.START,
      )
      const endItem = items.find(
        (item) =>
          item.uuidFunctional === uuid &&
          item.indexFunctional === indexFunctional &&
          item.position === POSITION.END,
      )

      if (!startItem || !endItem) {
        const updatedItems = items.filter(
          (item) => item.uuidFunctional !== uuid || item.indexFunctional !== indexFunctional,
        )
        setItems(updatedItems)
        return
      }

      const updatedItems = items.filter(
        (item) =>
          !(
            (item.uuidFunctional === startItem.uuidFunctional &&
              item.indexFunctional === startItem.indexFunctional) ||
            (item.indexFunctional === endItem.indexFunctional &&
              item.uuidFunctional === endItem.uuidFunctional) ||
            (item.row > startItem.row && item.row < endItem.row) ||
            (item.row === startItem.row && item.sequence >= startItem.sequence) ||
            (item.row === endItem.row && item.sequence <= endItem.sequence)
          ),
      )

      setItems(updatedItems)
    } else if (deleteOption === 'SINGLE') {
      const updatedItems = items.filter(
        (item) => !(item.uuidFunctional === uuid && item.indexFunctional === indexFunctional),
      )
      setItems(updatedItems)
    }
  }

  const handleSaveParams = (
    uuid: string,
    indexFunctional: number,
    updatedParams: { [key: string]: string },
  ) => {
    const updatedItems = items.map((item) => {
      if (item.uuidFunctional === uuid && item.indexFunctional === indexFunctional) {
        const functionalDetail = functionalList?.find((it) => it.id === item.uuidFunctional)
        return {
          ...item,
          params: (functionalDetail?.params ?? []).map((param) => ({
            name: param?.name,
            value:
              updatedParams[param.name] ??
              item.params?.find((itx) => itx.name === param.name)?.value ??
              (functionalDetail?.params ?? []).find((it) => it.name === param.name)?.defaultValue,
          })),
        }
      }
      return item
    })
    //@ts-ignore
    setItems(updatedItems)
  }

  const handleAddItem = (temporaryUUID: string, position: 'prev' | 'next') => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.temporaryUUID === temporaryUUID)
      if (index === -1) {
        return prevItems
      }

      const row = prevItems[index].row

      const newItem: Item = {
        content: 'new content',
        type: 1,
        row: row,
        sequence:
          position === 'prev' ? prevItems[index].sequence - 1 : prevItems[index].sequence + 1,
        temporaryUUID: uuidv4(),
      }

      const updatedItems = [...prevItems]
      if (position === 'prev') {
        updatedItems.splice(index, 0, newItem)
      } else {
        updatedItems.splice(index + 1, 0, newItem)
      }

      // Adjust sequence for all items in the same row
      return updatedItems.map((item) => ({
        ...item,
        sequence: updatedItems.filter((i) => i.row === item.row).indexOf(item) + 1,
      }))
    })
  }

  const handleAddRowOnPressEnterType1 = (
    temporaryUUID: string,
    beforeCursor?: string,
    afterCursor?: string,
  ) => {
    setItems((prevItems) => {
      const currentItemIndex = prevItems.findIndex((item) => item.temporaryUUID === temporaryUUID)
      if (currentItemIndex === -1) {
        return prevItems
      }
      const currentItem = prevItems[currentItemIndex]

      const newItem: Item = {
        temporaryUUID: uuidv4(),
        content: afterCursor ? afterCursor : 'new row content',
        type: 1,
        row: currentItem.row + 1,
        sequence: 1,
      }

      const updatedItems = prevItems.map((item) => {
        if (item.temporaryUUID === temporaryUUID) {
          return { ...item, content: beforeCursor ?? item.content }
        } else if (item.row === currentItem.row && item.sequence > currentItem.sequence) {
          return { ...item, row: item.row + 1, sequence: item.sequence }
        } else if (item.row > currentItem.row) {
          return { ...item, row: item.row + 1 }
        }
        return item
      })

      updatedItems.splice(currentItemIndex + 1, 0, newItem)

      // Adjust sequence for all items in the same row
      return updatedItems.map((item) => ({
        ...item,
        sequence: updatedItems.filter((i) => i.row === item.row).indexOf(item) + 1,
      }))
    })
  }

  const handleAddNewRows = (temporaryUUID: string, newRows: { content: string }[]) => {
    setItems((prevItems) => {
      let found = false
      let newRowNumber = 0
      const updatedItems: Item[] = []

      prevItems.forEach((item) => {
        if (!found) {
          updatedItems.push(item)
        } else {
          newRowNumber += 1
          updatedItems.push({ ...item, row: newRowNumber })
        }

        if (item.temporaryUUID === temporaryUUID) {
          found = true
          newRowNumber = item.row + 1

          newRows.forEach((newRow) => {
            const newItem: Item = {
              temporaryUUID: uuidv4(),
              content: newRow.content,
              type: 1,
              row: newRowNumber,
              sequence: 1,
            }
            updatedItems.push(newItem)
            newRowNumber++
          })
        }

        if (found && item.temporaryUUID !== temporaryUUID) {
          updatedItems.push({
            ...item,
            row: item.row + newRows.length,
          })
        }
      })

      return updatedItems
    })
  }

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result

    if (!destination) return
    // TODO:
    // Handle logic for moving items within and between lists
    // You need to implement the logic to update the state accordingly
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledHome>
        <div className='list-container'>
          <StrictModeDroppable droppableId='commonList'>
            {(provided) => (
              <div className='list' {...provided.droppableProps} ref={provided.innerRef}>
                <h3 className='list-header'>Common List</h3>
                {codeCommonList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    isDragDisabled={false}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className='list-item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h4 className='list-item-header'>
                          <li>{item.name}</li>
                        </h4>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>

          <StrictModeDroppable droppableId='functionalList'>
            {(provided) => (
              <div className='list' {...provided.droppableProps} ref={provided.innerRef}>
                <h3 className='list-header'>Functional List</h3>
                {functionalList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className='list-item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h4 className='list-item-header'>
                          <li>{item.name}</li>
                        </h4>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </div>
        <h3 className='list-header'>TEXTAREA BLOCK:</h3>

        <div
          style={{
            width: '100%',
            overflow: 'auto',
            padding: '20px',
            border: '1px solid gray',
            marginTop: '15px',
          }}
        >
          {Object.keys(groupedItems).map((rowKey) => (
            <StrictModeDroppable key={rowKey} droppableId={rowKey} direction='horizontal'>
              {(provided) => (
                <div
                  key={rowKey}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  {groupedItems[Number(rowKey)].map((item, index, arr) => {
                    const isTextContentPrev = arr[index - 1]?.type !== 1 ?? false
                    const isTextContentNext = arr[index + 1]?.type !== 1 ?? false
                    const draggableId = `draggable-id-row-${rowKey}-${item.temporaryUUID}`

                    return (
                      <Draggable key={draggableId} draggableId={draggableId} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.type === 1 && (
                              <Type1Item
                                id={item.temporaryUUID as string}
                                content={item.content}
                                row={item.row}
                                sequence={item.sequence}
                                handleChange={handleChange}
                                handleDelete={handleDeleteCodeCommon}
                                handleAddRow={handleAddRowOnPressEnterType1}
                                handleAddNewRows={handleAddNewRows}
                              />
                            )}
                            {item.type === 2 && (
                              <Type2Item
                                id={item.id as string}
                                isTextContentPrev={isTextContentPrev}
                                isTextContentNext={isTextContentNext}
                                uuid={item.uuidCodeCommon as string}
                                handleDelete={handleDeleteCodeCommon}
                                handleAddItem={handleAddItem}
                              />
                            )}
                            {item.type === 3 && (
                              <Type3Item
                                id={item.temporaryUUID as string}
                                uuid={item.uuidFunctional as string}
                                position={item.position as POSITION}
                                indexFunctional={item.indexFunctional as number}
                                handleDelete={handleDeleteFunctional}
                                params={item.params ?? []}
                                onSaveParams={handleSaveParams}
                                isTextContentPrev={isTextContentPrev}
                                isTextContentNext={isTextContentNext}
                                handleAddItem={handleAddItem}
                              />
                            )}
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </div>
      </StyledHome>
    </DragDropContext>
  )
}

export default Home
