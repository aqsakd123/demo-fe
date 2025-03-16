import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Select, Popconfirm, Input, message, Button } from 'antd'
import { MenuItem } from '@mui/material'
import {
  deleteVideoItem,
  insertVideoItem,
  listVideoItems,
} from '@app/api/video-item-api/video-item-api'

export const typeOptions = [
  {
    value: 'mdp',
    label: 'Multi-Dimension Podcast',
    description:
      'A podcast where an anonymous host tunes into frequencies across dimensions, interviewing entities from different realities, or tell stories of Gods and Devils of Multiverses',
    terminology: '',
    artStyle: '',
    LORA: '',
    importantCharacterSet: [],
    // #[Any extra instructions, such as preferred tone, pacing, or references to existing works for inspiration.]
    additionalNote: '',
    sub_types: [
      {
        value: 'w_tr',
        label: 'World Travelers',
        pod_type: 1,
        description:
          'Interviews with entities who have crossed the interdimensional gates and the unimaginable consequences of their journeys.',
      },
      {
        value: 'mu_c',
        label: 'Multiversal Council',
        pod_type: 1,
        description:
          'A roundtable discussion between representatives of various realities, exploring the secrets of the cosmos.',
      },
      {
        value: 'a_w',
        label: 'Anomaly Warnings',
        description: 'Reports on bizarre occurrences that might impact the listener’s reality.',
      },
      {
        value: 'm_ex',
        label: 'Mysterious Explorers',
        description:
          'Narratives of interdimensional explorers who have vanished or share their firsthand experiences.',
      },
    ],
  },
  {
    value: 'ar',
    label: 'Apocalypse Radio',
    description:
      'A survivalist radio station broadcasting from a survival, providing crucial information for those who endure the post-apocalyptic world.',
    world_building:
      'This world has collided with the Great Abyss—a mysterious wave sweeping across the cosmos, carrying with it the remnants of countless civilizations and their forgotten worlds. Though this world has not yet fallen, its end is inevitable. When the final embers of civilization are extinguished, everything that once belonged to this realm will be swallowed by the depths of the Great Abyss, becoming nothing more than a lonely grave among billions of others, lost in the eternal void. (Tag: Supernatural, chaotic forces)',
    sub_types: [
      {
        value: 's_map',
        label: 'Safe Zones Map',
        description:
          'Updates on safe zones and areas overrun by zombies, mutants, or deadly plagues.',
      },
      {
        value: 's_memo',
        label: 'Survivor Memoirs',
        description: 'First-hand survival stories from the remaining people on Earth.',
      },
      {
        value: 'tr_srs',
        label: 'Treasures of the Abyss',
        description: 'Treasures of the Abyss',
      },
      {
        value: 'l_world',
        label: 'Lost World',
        description: 'Accounts of fallen cities, lost civilizations, and unresolved mysteries.',
      },
    ],
  },
  {
    value: 'ch',
    label: 'The Cosmic Hotline',
    description:
      'An interdimensional call-in show offering psychological advice to extraterrestrial beings and mysterious entities.',
    sub_types: [
      {
        value: 'u_mail',
        label: 'Universal Mailbox',
        description: 'Reading and responding to letters from beings across the cosmos.',
      },
      {
        value: 's_tales',
        label: 'Stories Among the Stars',
        description: 'Recounting strange tales from distant civilizations.',
      },
      {
        value: 'm_issues',
        label: 'Multiversal Dilemmas',
        description: 'Advice for those trapped in paradoxes of time and space.',
      },
    ],
  },
  {
    value: 'cn',
    label: 'Chrono News',
    description:
      'A radio station delivering breaking news from different timelines and alternate realities.',
    sub_types: [
      {
        value: 't_diary',
        label: 'Time Traveler’s Diary',
        description: 'First-hand accounts from individuals who have altered history.',
      },
      {
        value: 'd_spot',
        label: 'Destiny Hotspots',
        description: 'Reports on major historical events that could reshape entire realities.',
      },
      {
        value: 'f_msg',
        label: 'Messages from the Future',
        description: 'Broadcasts of messages sent from the future to change the present.',
      },
    ],
  },
  {
    value: 'dfm',
    label: 'Dream FM',
    description:
      'A mysterious radio station only heard in dreams, where people share surreal nightmares.',
    sub_types: [
      {
        value: 'p_paths',
        label: 'Paths Between Dreams',
        description: 'Guidance on escaping endless sleepwalking loops.',
      },
      {
        value: 'd_journal',
        label: 'Dreamer’s Journal',
        description: 'Accounts of those lost in dream worlds and collective nightmares.',
      },
      {
        value: 's_memory',
        label: 'Memories of the Sleeping Ones',
        description: 'Dreams containing the memories of forgotten entities.',
      },
    ],
  },
  {
    value: 'lt',
    label: 'The Last Transmission',
    description: 'The final radio broadcast of dying civilization, documenting the end of an era.',
    sub_types: [
      {
        value: 'f_msg',
        label: 'Final Messages',
        description: 'Last transmissions of extinct civilizations sent into space.',
      },
      {
        value: 'd_collapse',
        label: 'Doomed Civilizations',
        description: 'Investigations into the causes of fallen empires.',
      },
      {
        value: 'l_signal',
        label: 'The Last Signal',
        description: 'Stories from the last survivors of once-great civilizations.',
      },
    ],
  },
]

export const mockVideoItems = [
  {
    id: '1',
    status: 'new',
    json_object: {
      idea: 'A futuristic AI uprising',
      type: 'sci-fi',
      sub_type: 'dystopian',
    },
  },
  {
    id: '2',
    status: 'complete_prompt',
    json_object: {
      idea: 'Exploring the deep ocean',
      type: 'adventure',
      sub_type: 'documentary',
    },
  },
  {
    id: '3',
    status: 'complete_audio',
    json_object: {
      idea: 'The last survivor on Mars',
      type: 'sci-fi',
      sub_type: 'survival',
    },
  },
  {
    id: '4',
    status: 're-doing-imaging',
    json_object: {
      idea: "A medieval knight's quest",
      type: 'fantasy',
      sub_type: 'heroic',
    },
  },
  {
    id: '5',
    status: 'final',
    json_object: {
      idea: 'Unraveling an ancient mystery',
      type: 'mystery',
      sub_type: 'historical',
    },
  },
]

const VideoItemList: React.FC = () => {
  const [videoItems, setVideoItems] = useState(mockVideoItems)
  const [status, setStatus] = useState<string>('new')
  const [inputValue, setInputValue] = useState<string>('')
  const [type, setType] = useState<string | null>(null)
  const [subType, setSubType] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchVideoItems()
  }, [status])

  const fetchVideoItems = async () => {
    setLoading(true)
    try {
      const response = await listVideoItems(status)
      setVideoItems(response.data)
    } catch (error) {
      console.error('Error fetching video items:', error)
      message.error('Failed to load video items')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteVideoItem(id)
      message.success('Deleted successfully')
      fetchVideoItems()
    } catch (error) {
      message.error('Failed to delete')
    }
  }

  const handleAdd = async () => {
    try {
      const data = JSON.parse(inputValue)
      if (!Array.isArray(data)) throw new Error('Invalid format')
      await insertVideoItem(data)
      message.success('Added successfully')
      setInputValue('')
      fetchVideoItems()
    } catch (error) {
      message.error('Invalid JSON format')
    }
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'idea',
      headerName: 'Idea',
      width: 250,
      valueGetter: (params) => params.row.json_object.idea,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      valueGetter: (params) => params.row.json_object.type,
    },
    {
      field: 'sub_type',
      headerName: 'Sub Type',
      width: 150,
      valueGetter: (params) => params.row.json_object.sub_type,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <Button type='link' onClick={() => navigate(`/video/${params.row.id}`)}>
            Edit
          </Button>
          <Popconfirm title='Are you sure to delete?' onConfirm={() => handleDelete(params.row.id)}>
            <Button type='link' danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ]

  const handleTypeChange = (value: string) => {
    setType(value)
    setSubType(null)
  }

  const filteredVideoItems = videoItems.filter(
    (item) =>
      (!type || item.json_object.type === type) &&
      (!subType || item.json_object.sub_type === subType),
  )

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <Select value={status} onChange={(v) => setStatus(v)} style={{ width: 200 }}>
          {[
            'new',
            'complete_prompt',
            'complete_audio',
            'complete_imaging',
            're-doing-imaging',
            'complete_child_video',
            'video_merged',
            'final',
            'uploaded',
          ].map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </Select>

        <Select
          allowClear
          value={type || 'none'}
          onChange={handleTypeChange}
          style={{ width: 250 }}
        >
          <MenuItem value='none' disabled>
            Select Type
          </MenuItem>
          {typeOptions.map((t) => (
            <MenuItem key={t.value} value={t.value}>
              {t.label}
            </MenuItem>
          ))}
        </Select>

        <Select
          allowClear
          value={subType || 'none'}
          onChange={setSubType}
          style={{ width: 250 }}
          disabled={!type}
        >
          <MenuItem value='none' disabled>
            Select Sub Type
          </MenuItem>
          {typeOptions
            .find((t) => t.value === type)
            ?.sub_types.map((st) => (
              <MenuItem key={st.value} value={st.value}>
                {st.label}
              </MenuItem>
            ))}
        </Select>
      </div>

      <DataGrid
        rows={filteredVideoItems}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10]}
      />

      <div style={{ marginTop: '20px' }}>
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter JSON array'
          rows={4}
        />
        <Button type='primary' onClick={handleAdd} disabled={!inputValue.trim()}>
          Add
        </Button>
      </div>
    </div>
  )
}

export default VideoItemList
