import { useMemo, useState } from 'react'
import {
  Select,
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@app/store/store'
import { Chapter, Character, storyStore, Terminology } from '@app/store/memoStore/storyStore'
import TextArea from 'antd/es/input/TextArea'
import { v4 as uuidv4 } from 'uuid'
import { chapters, storyTxt } from '@app/store/memoStore/data-mock'

const StoryList = () => {
  const storySettings = useSelector((state: RootState) => state.storyStore.storySetting)
  const originalStories = useSelector((state: RootState) => state.storyStore.originalStory)
  const newStories = useSelector((state: RootState) => state.storyStore.newStories)

  const [selectedStoryType, setSelectedStoryType] = useState(storySettings[0].value)
  const [searchTerm, setSearchTerm] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [dialogType, setDialogType] = useState('terminology')

  const [openJsonDialog, setOpenJsonDialog] = useState(false)
  const [jsonInput, setJsonInput] = useState('')

  const dispatch = useDispatch()

  const filteredStorySetting = storySettings.find((s) => s.value === selectedStoryType)

  const handleGetListChapter = (code: string, chapterName: string, isPrompt?: 1 | 2) => {
    if (isPrompt === 1) {
      return [
        //@ts-expect-error
        ...new Set(
          storyTxt
            .find((it) => it.value === code)
            ?.fullStory?.split(chapterName ?? '\nChapter')
            .filter((it) => it.length > 100)
            ?.map((it) => (chapterName ?? '\nChapter') + it + ' '),
        ),
      ]?.map((it) => generateSummaryPrompt(it, code))
    }
    return [
      //@ts-expect-error
      ...new Set(
        storyTxt
          .find((it) => it.value === code)
          ?.fullStory?.split(chapterName ?? '\nChapter')
          .filter((it) => it.length > 100)
          ?.map((it) => (chapterName ?? '\nChapter') + it + ' '),
      ),
    ]
  }

  const filteredOriginalStories = useMemo(() => {
    // TODO switch...case
    const fullStory = handleGetListChapter(selectedStoryType, '\nChương') ?? []

    if (fullStory?.length > 0) {
      return fullStory?.map((it, chapIndex) => {
        return {
          ...originalStories[chapIndex],
          fullChapter: it,
          chapterIndex: chapIndex + 1,
          id: originalStories[chapIndex]?.id ?? chapIndex,
          type: selectedStoryType,
        }
      })
    }

    return originalStories
      .filter((story) => story.type === selectedStoryType)
      ?.map((it, chapIndex) => {
        return {
          ...it,
          chapterIndex: it.chapterIndex ?? chapIndex + 1,
          fullChapter: fullStory[chapIndex],
        }
      })
  }, [originalStories, selectedStoryType])

  const filteredNewStories = newStories.find((story) => story.id === selectedStoryType)

  const handleRowClick = (item: any, type: 'terminology' | 'characters' | 'newStory') => {
    setSelectedItem(item)
    setDialogType(type)
    setOpenDialog(true)
  }

  const handleSave = () => {
    if (dialogType === 'terminology' || dialogType === 'characters') {
      dispatch(
        // @ts-ignore
        storyStore.actions.updateStorySetting({
          ...filteredStorySetting,
          [dialogType]: filteredStorySetting
            ? filteredStorySetting[dialogType].map((item: any) =>
                item.name === selectedItem.name ? selectedItem : item,
              )
            : [],
        }),
      )
    } else if (dialogType === 'originalStory') {
      dispatch(storyStore.actions.updateOriginalStory(selectedItem))
    } else {
      const newDataIndex = filteredNewStories?.chapters.findIndex((it) => it.id === selectedItem.id)
      if (newDataIndex !== -1 && filteredNewStories) {
        const newData = {
          ...filteredNewStories,
          chapters: filteredNewStories?.chapters.map((it) => {
            if (it.id === selectedItem.id) return selectedItem
            return it
          }),
        }
        dispatch(storyStore.actions.updateNewStory(newData))
      }
    }
    setOpenDialog(false)
  }

  const handleInputChange = (field: string, value: any) => {
    setSelectedItem((prev: any) => ({ ...prev, [field]: value }))
  }

  // const handleCreateBulkNewChapters = () => {
  //   const idToCreateChapters = filteredOriginalStories.filter((it) => it.originalStoryId)[
  //     filteredOriginalStories.filter((it) => it.originalStoryId).length - 1
  //   ]?.originalStoryId

  //   const indexToCreateChapter = filteredOriginalStories.findIndex(
  //     (it) => it.id === idToCreateChapters,
  //   )

  //   const listShouldCreateNewChapter = filteredOriginalStories.slice(indexToCreateChapter)

  //   let newChapterIndex = filteredNewStories.length

  //   const allNewChapters = listShouldCreateNewChapter.map((it) => {
  //     newChapterIndex++
  //     let newSummary = it.summaryDetail

  //     filteredStorySetting?.terminology.forEach((it) => {
  //       newSummary = newSummary.replaceAll(it.name ?? '', it.replacementName ?? '')
  //     })

  //     filteredStorySetting?.characters.forEach((it) => {
  //       newSummary = newSummary.replaceAll(it.name ?? '', it.replacementName ?? '')
  //     })

  //     const newItem: Chapter = {
  //       chapterIndex: newChapterIndex,
  //       id: uuidv4(),
  //       summaryDetail: newSummary,
  //       title: 'undefined_new_chapter' + newChapterIndex,
  //       type: selectedStoryType,
  //       originalStoryId: it.id,
  //     }

  //     return newItem
  //   })

  //   dispatch(storyStore.actions.addBulkNewStory(allNewChapters))
  // }

  const generateSummaryPrompt = (fullStory: string, code: string) => {
    // latest story data
    const storyDataTerminology: Terminology[] = []
    const storyDataCharacter: Character[] = []
    const filteredChapters = originalStories?.filter((it) => it.type === code)

    for (let i = 0; i <= filteredChapters.length - 1; i++) {
      const chapter = filteredChapters[i]
      if ((chapter.terminology ?? [])?.length > 0) {
        chapter.terminology?.forEach((it) => {
          const indexStoryTerminology = storyDataTerminology.findIndex(
            (itx) => it.name === itx.name || it.value === itx.value,
          )

          console.log(indexStoryTerminology)

          if (indexStoryTerminology !== -1) {
            storyDataTerminology.map((itTer, terIndex) => {
              if (terIndex === indexStoryTerminology) return it
              return itTer
            })
          } else {
            storyDataTerminology.push(it)
          }
        })
      }

      if ((chapter.characters ?? [])?.length > 0) {
        chapter.characters?.forEach((it) => {
          const indexStoryCharacter = storyDataCharacter.findIndex((itx) => it.name === itx.name)
          if (indexStoryCharacter !== -1) {
            storyDataCharacter.map((itChar, charIndex) => {
              if (charIndex === indexStoryCharacter) return it
              return itChar
            })
          } else {
            storyDataCharacter.push(it)
          }
        })
      }
    }

    const character_descriptions = JSON.stringify(
      storyDataCharacter?.filter((it) =>
        fullStory.toLowerCase().includes(it.name.toLocaleLowerCase()),
      ),
    )

    const terminology = JSON.stringify(
      storyDataTerminology?.filter(
        (it) =>
          (it.name && fullStory?.toLowerCase().includes(it.name.toLowerCase())) ||
          (it.value && fullStory?.toLowerCase().includes(it.value.toLowerCase())),
      ),
    )

    const text = `
    I need you to read this chapter, and create for me a json object which include these fields:

    ** Chapter content:

    ${fullStory}

    export type Chapter = {
      id: string // id should be a random uuid
      type: string // should be equal
      chapterIndex: number 
      title: string // title of this chapter, if none, create a title which suit best to this chapter for me
      summaryDetail: string // summary this chapter by detail. For example, a character say what, do what, with bried description of the person/ character/ surrounding at the mean time (if the chapter above mentioned). The summary detail shoudl be precisely and maintain accuracy while still have completeness. The summaryDetail should be 200 words or more.
      // if a definition or a faction, a power rank is mentioned in the story, I want to make it into a "terminology" array with name is the text of the definition/faction/power rank.
      // value is the name being shorted and make as an unique value (snake upper case)
      // type: 
      // - power: power rank mentioned in the chapter. For example some power rank is Apprentice Mage -> Mage -> True Mage -> Grand Mage -> Sage 
      // - faction: A faction, like a country, a cult, an orginization
      // - definition: A not-that-common definitio mentioned.
      // isAdd: if the same terminology is mentioned in the below (##Terminology_Data), then isAdd = false , else = true
      terminology:  {
        name?: string
        value?: string
        description: string
        type: 'power' | 'faction' | 'definition'
        isAdd: boolean
      }[],
      // character mentioned in the story. Should be included, like, their power rank (Mage/ Apprentice Mage), their faction belonging (for example: working in Russian Gorverment)
      // if the character is mentioned in the below (##Character_Data), then firstIntroduced = same one 
      // else firstIntroduced = current chapter index
      type Character = {
        name: string
        description: string
        firstIntroduced: number
        currentStatus: 'dead' | 'alive'
      }
      
      ### Important note: If "terminology" and "character" description not having any changes (major changes) then the character/terminology need to display in the output format. Else, no need to add the terminology/character in the output. For example, if 
      ### Note 2: output should be in the same language of the chapter inputted. But the terminology.value should be in english, snake_upper_case.
      ### Note 3: The terminology and characters list should be full, accurate and contain all non-common definition/faction... in the chapter. 
      ### IMPORTANT : All fields (name, value, type, description are required)
      Note 3: Name should only show words appear in the chapter. Please do not make up any extra-word.
      }

    ### Inputs Data: (These information if mentioned in the chapter_summary might be use. If not mention, do not use)

    ** ##Character_Data **
    ${character_descriptions}

    ** ##Terminology_Data ** 
    ${terminology}`

    navigator.clipboard.writeText(text)

    return text
  }

  const clickGeneratePromptChapter = (story: Chapter) => {
    const chapter_summary = story.summaryDetail

    // latest story data
    const storyDataTerminology: Terminology[] = []
    const storyDataCharacter: Character[] = []
    const filteredChapters = originalStories?.filter((it) => it.type === selectedStoryType)

    for (let i = 0; i <= filteredChapters.length - 1; i++) {
      const chapter = filteredChapters[i]
      if ((chapter.terminology ?? [])?.length > 0) {
        chapter.terminology?.forEach((it) => {
          const indexStoryTerminology = storyDataTerminology.findIndex(
            (itx) => it.name === itx.name || it.value === itx.value,
          )
          if (indexStoryTerminology !== -1) {
            storyDataTerminology.map((itTer, terIndex) => {
              if (terIndex === indexStoryTerminology) return it
              return itTer
            })
          } else {
            storyDataTerminology.push(it)
          }
        })
      }

      if ((chapter.characters ?? [])?.length > 0) {
        chapter.characters?.forEach((it) => {
          const indexStoryCharacter = storyDataCharacter.findIndex((itx) => it.name === itx.name)
          if (indexStoryCharacter !== -1) {
            storyDataCharacter.map((itChar, charIndex) => {
              if (charIndex === indexStoryCharacter) return it
              return itChar
            })
          } else {
            storyDataCharacter.push(it)
          }
        })
      }
    }

    const character_descriptions = JSON.stringify(
      storyDataCharacter?.filter((it) =>
        story.summaryDetail.toLowerCase().includes(it.name.toLowerCase()),
      ),
    )

    const terminology = JSON.stringify(
      storyDataTerminology?.filter(
        (it) =>
          (it.name && story.summaryDetail.toLowerCase()?.includes(it.name.toLowerCase())) ||
          (it.value && story.summaryDetail.toLowerCase()?.includes(it.value.toLowerCase())),
      ),
    )

    const prevChapter = filteredNewStories?.chapters.find(
      (it) => it.chapterIndex === story.chapterIndex - 1,
    )

    const last300words = prevChapter?.fullChapter
      ? prevChapter?.fullChapter.substring(
          prevChapter.fullChapter?.length - 300,
          prevChapter.fullChapter?.length - 1,
        )
      : ''

    const text = `You are a skilled fiction writer tasked with writing a 2000-word chapter of a longer story. 
    Your writing should be clever, immersive, and avoid clichés while maintaining coherence. 
    Write the story a proffesional sci-fi fantasy write, with clear and easy-to-understand, easy-to-read tone
    Follow these guidelines:

      1 Add some humorous parts/scenes if needed
      2. The tone should be immersive, drawing readers in with a compelling yet natural flow.
      3. The chapter should be approximately 2000 words (acceptable range: 1800–2200 words).
      4. Ensure all elements mentioned in the provided chapter outline are fully developed—do not add unnecessary details outside the given input.
      5. The chapter must feel like a seamless continuation of the previous one. Use the provided summary and excerpt from the last chapter to maintain consistency in tone, pacing, and plot.
      6. Create an appropriate title that summarizes the chapter without revealing too much.

      ### Inputs: (These information if mentioned in the chapter_summary might be use. If not mention, do not use)
      - **Overall plot of this chapter:** (You will write the chapter ${selectedItem.chapterIndex})
      ${chapter_summary}

      - **Character descriptions in this chapter:** 
      ${character_descriptions}

      - Terminology & Style Guide (may used or not used):
      ${terminology}

      ${prevChapter ? '- **Summary of the previous chapter:** \n' + prevChapter?.summaryDetail : ''}

      ${
        prevChapter
          ? '- **Excerpt (about 300 words) from the previous chapter:**  \n' + last300words
          : ''
      }

      ### Output format:
      ### Only, and only the full chapter content text
      
      IMPORTANT: If there are any not-common terminology you don't understand, or any factions not mentioned anywhere in the prompt, please stop making the output and ask me about the terminology/factions/definitions
      Thank you.
      `
    navigator.clipboard.writeText(text)
    alert('Copy done sir')
  }

  const clickGeneratePromptRecheckChapter = (story: Chapter) => {
    const chapter_summary = story.summaryDetail

    const storyData = storySettings.find((it) => it.value === story.type)

    const terminology = storyData?.terminology?.filter(
      (it) =>
        (it.name && story.summaryDetail.toLowerCase()?.includes(it.name.toLowerCase())) ||
        (it.value && story.summaryDetail.toLowerCase()?.includes(it.value.toLowerCase())),
    )

    const prevChapter = filteredNewStories?.chapters?.find(
      (it) => it.chapterIndex === story.chapterIndex - 1,
    )

    const last300words = prevChapter?.fullChapter
      ? prevChapter?.fullChapter.substring(
          prevChapter.fullChapter?.length - 300,
          prevChapter.fullChapter?.length - 1,
        )
      : ''

    const text = `
    You are a skilled fiction writer editor. 
    Your job is to read a chapter, and then check if it match all required requirement.

      - chapter should continue the content of the previous chapter
      - Chapters should connect scenes from previous chapters (except in cases where the idea specifically describes scene transitions).
      - The chapter should completely fill in the main ideas in the "idea" entry below
      - The content in the termilogy should be described accurately in the chapter (it may not be described or the full chapter may be under-described, but it should not be described incorrectly or over-described, unless the details are not too important).

      ### Inputs:
      - **Overall plot of this chapter (IDEA):** 
      ${chapter_summary}

      - **Chapter content (check this full chapter content):** 
      ${story.fullChapter}

      - Terminology & Style Guide (may used or not used):
      ${terminology}

      ${prevChapter ? '- **Summary of the previous chapter:** \n' + prevChapter?.summaryDetail : ''}

      ${
        prevChapter
          ? '- **Excerpt (about 300 words) from the previous chapter:**  \n' + last300words
          : ''
      }

      ### Output format:
      ### If need to modify
      Return a JSON object with the following structure:
      {
        "title": "Your chosen title for the chapter",
        "fullStory": "New full chapter content. Except for the parts that need to be edited, absolutely do not edit other parts. Content after editing should keep the same number of words or maybe more, but absolutely not less. "
      }

      ### if no need to modify, tell me the content of the chapter is good.

      IMPORTANT: If there are any not-common terminology you don't understand, or any factions not mentioned anywhere in the prompt, please stop making the output and ask me about the terminology/factions/definitions
      Thank you.
      `
    navigator.clipboard.writeText(text)
  }

  // const assignIds = () => {
  //   dispatch(
  //     storyStore.actions.setNewStories(
  //       newStories.map((story) => {
  //         return {
  //           ...story,
  //           id: uuidv4(),
  //         }
  //       }),
  //     ),
  //   )
  // }

  const handleSaveJSON = () => {
    try {
      let parsed: Chapter = JSON.parse(jsonInput)
      parsed = {
        ...parsed,
        type: selectedStoryType,
        id: uuidv4(),
      }
      if (!parsed.id) {
        alert('Field id is required')
        return
      }
      if (!parsed.type) {
        alert('Field type is required')
        return
      }
      if (!parsed.chapterIndex) {
        alert('Field chapterIndex is required')
        return
      }
      if (!parsed.title) {
        alert('Field title is required')
        return
      }
      if (!parsed.summaryDetail) {
        alert('Field summaryDetail is required')
        return
      }
      if (!parsed.terminology || parsed.terminology.length === 0) {
        alert('Terminology must be greater than 0')
        return
      }
      if (!parsed.characters || parsed.characters.length === 0) {
        alert('Characters must be greater than 0')
        return
      }
      for (const term of parsed.terminology) {
        if (!term.name) {
          alert('Field terminology.name is required')
          return
        }
        if (!term.value) {
          alert('Field terminology.value is required')
          return
        }
        if (!term.description) {
          alert('Field terminology.description is required')
          return
        }
        if (!term.type) {
          alert('Field terminology.type is required')
          return
        }
      }
      for (const char of parsed.characters) {
        if (!char.name) {
          alert('Field characters.name is required')
          return
        }
        if (!char.description) {
          alert('Field characters.description is required')
          return
        }
        if (!char.firstIntroduced) {
          alert('Field characters.firstIntroduced is required')
          return
        }
        if (!char.currentStatus) {
          alert('Field characters.currentStatus is required')
          return
        }
      }
      dispatch(storyStore.actions.addOriginalStory(parsed))
      setOpenJsonDialog(false)
      setJsonInput('')
    } catch (error) {
      alert('Invalid JSON format')
    }
  }

  console.log(originalStories)

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Select
          value={selectedStoryType}
          onChange={(e) => setSelectedStoryType(e.target.value)}
          displayEmpty
          fullWidth
        >
          {newStories.map((setting) => (
            <MenuItem key={setting.id} value={setting.id}>
              {setting.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label='Search'
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trim().toLowerCase())}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <DataGrid
            rows={filteredStorySetting?.terminology?.map((it, idx) => ({ id: idx, ...it })) || []}
            columns={[{ field: 'name', headerName: 'Terminology', flex: 1 }]}
            onRowClick={(params) => handleRowClick(params.row, 'terminology')}
            autoHeight
          />
        </div>
        <div style={{ flex: 1 }}>
          <DataGrid
            rows={filteredStorySetting?.characters?.map((it, idx) => ({ id: idx, ...it })) || []}
            columns={[{ field: 'name', headerName: 'Characters', flex: 1 }]}
            onRowClick={(params) => handleRowClick(params.row, 'characters')}
            autoHeight
          />
        </div>
      </div>
      {/* <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Button
          variant='contained'
          disabled={isDisabledGenerateStoryList}
          onClick={handleCreateBulkNewChapters}
        >
          Create Bulk New Story
        </Button>
      </div>
      <Button
        onClick={assignIds}
        variant='contained'
        color='primary'
        style={{ marginRight: '20px' }}
      >
        Assign Missing IDs
      </Button>
      <Button onClick={() => setOpenJsonDialog(true)} variant='contained' color='secondary'>
        Add new chapter of the original story
      </Button> */}

      <div style={{ marginTop: '20px' }} />

      {/* <DataGrid
        rows={filteredOriginalStories}
        columns={[
          { field: 'id', headerName: 'ID' },
          { field: 'chapterIndex', headerName: 'Chapter Index' },
          { field: 'title', headerName: 'Title', width: 200 },
          { field: 'summaryDetail', headerName: 'Summary', width: 200 },
          {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
              <Select displayEmpty size='small'>
                <MenuItem
                  color='red'
                  disabled={!params.row.summaryDetail}
                  onClick={() => {
                    if (!confirm('delete this one?')) return
                    dispatch(storyStore.actions.deleteOriginalStory(params.row.id))
                  }}
                >
                  Delete
                </MenuItem>
                <MenuItem
                  color='red'
                  onClick={() => generateSummaryPrompt(params.row.fullChapter, params.row.type)}
                >
                  Generate Summary Prompt
                </MenuItem>
              </Select>
            ),
          },
        ]}
        onRowClick={(params) => handleRowClick(params.row, 'originalStory')}
      /> */}
      <DataGrid
        rows={filteredNewStories?.chapters ?? []}
        columns={[
          { field: 'id', headerName: 'ID' },
          { field: 'chapterIndex', headerName: 'Chapter Index' },
          { field: 'title', headerName: 'Title', width: 200 },
          { field: 'summaryDetail', headerName: 'Summary', width: 200 },
          {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
              <Select displayEmpty>
                <MenuItem
                  onClick={() => dispatch(storyStore.actions.deleteNewStory(params.row.id))}
                >
                  Delete
                </MenuItem>
                <MenuItem onClick={() => clickGeneratePromptChapter(params.row)}>
                  Generate Prompt
                </MenuItem>
                <MenuItem onClick={() => clickGeneratePromptRecheckChapter(params.row)}>
                  Recheck Prompt
                </MenuItem>
              </Select>
            ),
          },
        ]}
        autoHeight
        onRowClick={(params) => handleRowClick(params.row, 'newStory')}
      />

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle>Edit {dialogType}</DialogTitle>
        <DialogContent>
          {dialogType === 'terminology' && (
            <>
              <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <TextField
                  label='Name'
                  fullWidth
                  value={selectedItem?.name || ''}
                  disabled
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <TextArea
                  title='Description'
                  rows={5}
                  value={selectedItem?.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />{' '}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Select
                  value={selectedItem?.type || ''}
                  fullWidth
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  <MenuItem value='power'>Power</MenuItem>
                  <MenuItem value='faction'>Faction</MenuItem>
                  <MenuItem value='definition'>Definition</MenuItem>
                </Select>
              </div>
            </>
          )}
          {dialogType === 'characters' && (
            <>
              <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <TextField
                  label='Name'
                  fullWidth
                  disabled
                  value={selectedItem?.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <TextArea
                  title='Description'
                  rows={10}
                  value={selectedItem?.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />{' '}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <TextField
                  label='First Introduced'
                  type='number'
                  fullWidth
                  value={selectedItem?.firstIntroduced || ''}
                  onChange={(e) => handleInputChange('firstIntroduced', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Select
                  value={selectedItem?.currentStatus || ''}
                  fullWidth
                  onChange={(e) => handleInputChange('currentStatus', e.target.value)}
                >
                  <MenuItem value='alive'>Alive</MenuItem>
                  <MenuItem value='dead'>Dead</MenuItem>
                </Select>
              </div>
            </>
          )}
          {(dialogType === 'originalStory' || dialogType === 'newStory') && (
            <>
              <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <TextField
                  label='Title'
                  fullWidth
                  value={selectedItem?.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                Summary Detail:
                <TextArea
                  title='Summary'
                  rows={10}
                  value={selectedItem?.summaryDetail || ''}
                  onChange={(e) => handleInputChange('summaryDetail', e.target.value)}
                />
              </div>
              <Button variant='contained' onClick={() => clickGeneratePromptChapter(selectedItem)}>
                Create prompt
              </Button>
              <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                Full Chapter:
                <TextArea
                  title='Summary'
                  rows={10}
                  value={selectedItem?.fullChapter || ''}
                  onChange={(e) => handleInputChange('fullChapter', e.target.value)}
                />
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
          <Button onClick={handleSave} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openJsonDialog} onClose={() => setOpenJsonDialog(false)} fullWidth>
        <DialogTitle>Enter JSON Data</DialogTitle>
        <DialogContent>
          <TextArea rows={10} value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenJsonDialog(false)}>Close</Button>
          <Button onClick={handleSaveJSON} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default StoryList
