import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextField, Button, Select, MenuItem, Typography, Paper, Grid } from '@mui/material'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import {
  generateAudio,
  generateChildrenVideo,
  getTags,
  getVideoItemDetail,
  updateVideoItem,
} from '@app/api/video-item-api/video-item-api'
import { typeOptions } from './VideoItemList'
import { message } from 'antd'

const DisabledTextField = styled.div`
  width: 100%;
  background-color: lightgray;
  color: black;
  border: none;
  padding: 8px;
  cursor: default;
  resize: none;
  &:hover {
    cursor: not-allowed;
  }
`

const HeaderSytled = styled(Paper)`
  .styled-table-header {
    background-color: #8f8ff5f7;
    color: white;
  }
`

const mockVideoItem = {
  id: 1,
  status: 'new',
  json_object: {
    idea: 'A mysterious broadcast',
    type: 'ar',
    sub_type: 's_map',
    full_story: 'A final message before the end of the world...',
    upload_time: '',
    schedule_uuid: 'uuid',
    status: 'complete_prompt',
    full_image_prompt: [
      {
        id: 'uuid_unique',
        name: 'astronaut in space',
        prompt: 'A lone astronaut floating in a ruined space station...',
        start_time: '0:00',
        end_time: '0:10',
        background_movement: 'left',
        background_effect: 'raining',
        tags: ['space', 'astronaut', 'technology'],
        re_do: false,
      },
    ],
    audio_content: [{ text: 'Did you hear that?', voice: 'Young Female', tone: 'Nervous' }],
    background_music: [{ type: 'dramatic', start_time: 0.3, end_time: 0.6 }],
  },
}

const VideoItemEdit = () => {
  const { id } = useParams()
  const [videoItem, setVideoItem] = useState(mockVideoItem)
  const [tagList, setTagList] = useState([])
  const [createAudioLoading, setCreateAudioLoading] = useState<boolean>(false)

  const [mp3Base64, setMp3Base64] = useState<string | null>(null)
  const [mp3Duration, setMp3Duration] = useState<number | null>(null)

  const [fullStoryInput, setFullStoryInput] = useState('')
  const [audioBgInput, setAudioBgInput] = useState('')
  const [imagePromptInput, setImagePromptInput] = useState('')

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await getTags()
        setTagList(response.data)
      } catch (error) {
        console.error('Error fetching tags:', error)
      }
    }

    fetchTags()
  }, [])

  useEffect(() => {
    const fetchVideoItem = async () => {
      try {
        if (!id) return
        const response = await getVideoItemDetail(id)
        setVideoItem(response.data)
        setMp3Base64(response.data.mp3_object?.mp3_object)
        setMp3Duration(response.data.mp3_object?.mp3_time_period)
      } catch (error) {
        console.error('Error fetching video item:', error)
      }
    }

    if (id) {
      fetchVideoItem()
    }
  }, [id])

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const isValidJson = (text: string, field: string) => {
    try {
      const parsed = JSON.parse(text)
      return parsed[field]
    } catch {
      return false
    }
  }

  const audioRows = videoItem.json_object.audio_content?.length
    ? videoItem.json_object.audio_content?.map((item, index) => ({
        id: index,
        text: item.text,
        voice: item.voice,
        tone: item.tone,
      }))
    : []

  const backgroundMusic =
    (videoItem.json_object.background_music ?? []).map((item, index) => ({
      id: `music-${index}`,
      type: '' + item.type,
      text: '',
      voice: '',
      tone: '',
      start_time: item.start_time,
      end_time: item.end_time,
    })) ?? []

  const imageRows = videoItem.json_object.full_image_prompt?.length
    ? videoItem.json_object.full_image_prompt.map((item, index) => ({
        id: item.id,
        index: index,
        name: item.name,
        prompt: item.prompt,
        background_movement: item.background_movement,
        background_effect: item.background_effect,
      }))
    : []

  const handleAddFullStory = () => {
    try {
      const newStory = fullStoryInput
      if (newStory) {
        setVideoItem((prev) => ({
          ...prev,
          json_object: { ...prev.json_object, full_story: newStory },
        }))
        setFullStoryInput('')
      }
    } catch (error) {
      console.error('Invalid JSON for Full Story')
    }
  }

  const isValidArray = (text: string) => {
    try {
      const parsed = JSON.parse(text)
      return Array.isArray(parsed)
    } catch {
      return false
    }
  }

  const handleAddAudioContent = () => {
    try {
      const newData = JSON.parse(audioBgInput)
      if (newData.audio_content || newData.background_music) {
        setVideoItem((prev) => ({
          ...prev,
          json_object: {
            ...prev.json_object,
            audio_content: [...newData.audio_content],
            background_music: [...newData.background_music],
          },
        }))
        setAudioBgInput('')
      }
    } catch (error) {
      console.error('Invalid JSON for Audio Content')
    }
  }

  const handleAddImagePrompt = () => {
    try {
      const newPrompt = Array.isArray(JSON.parse(imagePromptInput))
        ? JSON.parse(imagePromptInput)
        : JSON.parse(imagePromptInput).full_image_prompt
      if (newPrompt) {
        setVideoItem((prev) => ({
          ...prev,
          json_object: {
            ...prev.json_object,
            full_image_prompt: [...newPrompt],
          },
        }))
        setImagePromptInput('')
      }
    } catch (error) {
      console.error('Invalid JSON for Full Image Prompt')
    }
  }

  const handleSaveChanges = async () => {
    try {
      if (!id) return
      await updateVideoItem(id, videoItem)
      alert('Updated successfully!')
    } catch (error) {
      console.error('Failed to update:', error)
      alert('Update failed!')
    }
  }

  const subType: any = typeOptions
    .find((t) => t.value === videoItem.json_object.type)
    ?.sub_types?.find((it) => it.value === videoItem.json_object.sub_type)

  const type = typeOptions.find((it) => it.value === videoItem.json_object.type)

  const handleScriptFullStory = () => {
    const text = `
       
        Firstly, forget above requirement.
        This prompt have nothing to do with others.
        I have an idea or a short story that I want to transform into a podcast (or a radio post) with a nostalgic storytelling style,
        similar to American radio broadcasts or a podcast. The final output should be a script that, when narrated, lasts approximately 5-6 minutes and I also want to make this be able to read using an text-to-speech

        Requirements for the script:
        - The plot must be clear, engaging, and logically structured. It should have a smooth progression, ensuring each part connects naturally.
        - The story should be clever and avoid clichés while maintaining coherence.
        - Use simple, clear, and conversational language—capturing the essence of classic radio storytelling without being overly dramatic or exaggerated. (When neccessary, can use SOME advance word, but limited)
        - The tone should be immersive, drawing listeners in with a compelling yet natural flow.
        - The story should resonate with an American audience.
        - Story should have length of 1000 words
        Additional Information:

        World Building (may used or not used): 
        - ${type?.world_building}
        This radio show mainly about ${subType?.description} and ${
      subType?.pod_type === 1
        ? 'it should be 2 or more person discussing about a topic'
        : ' story of a person told by the narrator or the adventurers themself'
    } 

        Terminology & Style Guide (may used or not used): 
        ${type?.terminology}

        Core Idea: 
        ${videoItem.json_object.idea}

        Additional Notes: 
        ${type?.additionalNote}

        Please integrate these elements seamlessly into the script while preserving a classic radio-style storytelling approach.
        `

    handleCopyToClipboard(text)
    message.success('Copy Full Story Promtp Success')
  }

  const roundUpToNearestTen = (num: number) => Math.ceil(num / 10) * 10

  const handleScriptImageGeneration = () => {
    if (!videoItem.json_object.full_story || !mp3Duration) {
      message.error('No Full story or mp3Duration')
      return
    }
    const text = `Firstly, forget above requirement.
        This prompt have nothing to do with others.
        I have a story, and I want to generate multiple image based on it. Each image should match the narration of the story at a specific time segment.

        Image Prompt Structure:
        Each image should:

        - Be exactly represent the scene or mood of the story at that time.
        - Be describe a simple image (e.g., an astronaut floating in a space station, a glowing control panel, Earth seen through a window).
        - (Extremely Important) Avoid sensitive topics such as death, corpses, or distressing elements. Even when the content is related to death, corpses, avoid it by all means. (For example, if the story related to "a woman found her dead husband body", only show a crying woman.)
        - Include a well-described environment, key character details, and necessary visual effects (e.g., lighting, smoke, reflections, movement).
        - Be simple in execution but rich in description to ensure accurate image generation. 
        - The total image created should be ${roundUpToNearestTen(mp3Duration) / 10} images

        Input Information:

        Story Text: 
        ${videoItem.json_object.full_story}

        Character & World-Building Details: 
        ${type?.world_building}
        Important Character: ${type?.importantCharacterSet
          ?.filter((it) => videoItem.json_object.full_story?.includes(it))
          ?.join('\n')}

        Art Style & Aesthetic Preferences: 
        ${type?.artStyle}

        Tag List:
        ${tagList}

        Expected Output Format:
        The response should be a structured list of image prompts. Each prompt should include a character description 
        (same between prompts for 1 character. If not mentioned, make one yourself), ensuring priority is given to pre-existing tags where possible:
        (background_movement có các dạng: "left" | "right" | "top" | "bottom". background_effect có các dạng như : "raining", "fog" (mặc định là "none"))
        Estimate the time it take to text-to-speech the whole full_story, and for create an image prompt for each 10 seconds
        IMPORTANT: If the story/ scene mention a God, set "resource_image = true" and name is name of the God. (For example, god's name is Taekhan, then name = Taekhan, and resource_image = true.)
        [
        {
            "id": "uuid_unique_1" (example: be17e214-9b9b-4461-8430-14969eeca482),
            "name": "astronaut in space",
            "prompt": "A futuristic space station interior, dimly lit with blue neon lights. A lone astronaut in a sleek white spacesuit sits at a control panel, his helmet reflecting the holographic screens around him. Outside the large circular window, Earth slowly rotates in the distance. A faint mist of condensation forms on the glass.",
            background_movement: "left",  
            background_effect: "raining"
            "start_time": "0:00",
            "end_time": "0:10",
            "tags": ["space", "astronaut", "technology"]
        },
        {
            "id": "uuid_unique_2" (ex: ec45c868-3341-49ba-858d-6ad997594336),
            "name": "astronaut pressing button",
            "prompt": "Inside the spacecraft’s observation deck, the astronaut stands in front of a glowing digital dashboard, pressing buttons as complex star maps shift across the screen. Soft pulses of red and blue light illuminate his focused face. ",
            "start_time": "0:10",
            "end_time": "0:20",
            "tags": ["control", "screen", "futuristic"]
        }
        ]
        Ensure that each prompt remains immersive while keeping the visual execution simple and clear.
        Tags should be single words and should prioritize pre-existing tags when available.
        The image prompt should avoid unnecessary complexity, while the prompt remains detailed for accurate video generation. Suggested structure for the prompt: "describe the main character in the prompt of the scene" + "describe the background"

        * output should only be in this format (and must contain ALL ${
          roundUpToNearestTen(mp3Duration) / 10
        } item needed)
        [
        {
            "id": "uuid_unique_1" (example: be17e214-9b9b-4461-8430-14969eeca482),
            "name": "astronaut in space",
            "prompt": "A futuristic space station interior, dimly lit with blue neon lights. A lone astronaut in a sleek white spacesuit sits at a control panel, his helmet reflecting the holographic screens around him. Outside the large circular window, Earth slowly rotates in the distance. A faint mist of condensation forms on the glass.",
            background_movement: "left",  
            background_effect: "raining"
            "start_time": "0:00",
            "end_time": "0:10",
            "tags": ["space", "astronaut", "technology"]
        },
        {
            "id": "uuid_unique_2" (ex: ec45c868-3341-49ba-858d-6ad997594336),
            "name": "astronaut pressing button",
            "prompt": "Inside the spacecraft’s observation deck, the astronaut stands in front of a glowing digital dashboard, pressing buttons as complex star maps shift across the screen. Soft pulses of red and blue light illuminate his focused face. ",
            "start_time": "0:10",
            "end_time": "0:20",
            "tags": ["control", "screen", "futuristic"]
        }
        ]
        `
    handleCopyToClipboard(text)
    message.success('Copy Image Prompt Success')
  }

  const handleScriptAudioAndBackgroundMusic = () => {
    if (!videoItem.json_object.full_story) {
      message.error('No Full story')
      return
    }

    const text = `
    Firstly, forget above requirement.
        This prompt have nothing to do with others.

        Take the following story and convert it into a format suitable for generating an audio story teller. Follow these rules strictly:

        Identify all narrators, character dialogues, and monologues in the story.
        Annotate each part of the story with a [Voice: Type, Tone: Mood] tag.
        Voice Types:

            - NARRATOR_MALE, NARRATOR_FEMALE
            - MIDDLE_AGE_MALE_1, MIDDLE_AGE_MALE_2
            - YOUNG_MALE_1, YOUNG_MALE_2, YOUNG_MALE_3
            - MIDDLE_AGE_FEMALE_1, MIDDLE_AGE_FEMALE_2
            - YOUNG_FEMALE_1, YOUNG_FEMALE_2, YOUNG_FEMALE_3

        Additional Rules for Voice Selection:
            - Prioritize diverse Voice Types from different categories whenever possible.
            Example: If a character is assigned to MIDDLE_AGE_MALE_1, the next character should preferably use YOUNG_FEMALE_1, YOUNG_MALE_2, or MIDDLE_AGE_FEMALE_2, unless the full_story explicitly specifies otherwise.

        * Tones: Use only the following tones:
        SERIOUS
        CHEERFUL
        CALM
        DRAMATIC
        SARCASTIC
        ANGRY
        MYSTERIOUS
        EXCITED
        NERVOUS
        SORROWFUL
        HOPEFUL
        COMMANDING
        WHIMSICAL
        ROMANTIC
        TENSE

        Keep the original story content unchanged but clearly format it as follows:
        Example Structure:
        "audio_content" : [
            {"text": "Deep in the heart of the forest, the wind whispered secrets no one could understand.", "voice": "Narrator", "tone": "Mysterious"},
            {"text": "Did you hear that?", "voice": "Young Female", "tone": "Nervous"},
            {"text": "Yeah! It sounded like an adventure waiting to happen!", "voice": "Boy", "tone": "Excited"},
            {"text": "Stay close, children. This forest hides more than just secrets.", "voice": "Old Male", "tone": "Serious"}
        ]

        Ensure the annotations match the mood and personality of the characters or the scene.
        Ensure that text representing pauses or interruptions, used these characters '...' and '—'
        (!!IMPORTANT : Please ensure the Voice of each character in the whole story is unique and the same the whole story, if the character who said that is not mentioned (if the sentence like ' Jack said: "Hello"' mean the character is mentioned))

        Beside the story content above, show me another object like:

        background_music: [
            { type: "sad", start_time: 0:01, end_time: 0:29 },
            { type: "dramatic", start_time: 0:30, end_time: 0:60 },
        ]

        The Background_music should be depend on the mood of the story content and choose the best fit (start_time and end_time should be estimated due to the story content)
        There are these type of background_music: dramatic, emotional, emotional-sad, serious (exactly these text)

        For narrators, select a fitting voice type and tone to set the atmosphere.

        Here is the story to convert:

        ${videoItem.json_object.full_story}


        The output should be in the requested format with detailed annotations for every part. The final output should be(and only as a json):
        * input: Deep in the heart of the forest, the wind whispered secrets no one could understand. Anna ask: Did you hear that?
        Yeah! It sounded like an adventure waiting to happen! - Jack said excited
        Stay close, children. This forest hides more than just secrets - Mysterious old man warn the 2 kids.

        * output: 
        {
            "audio_content" : [
                {"text": "Deep in the heart of the forest, the wind whispered secrets no one could understand.", "voice": "Narrator", "tone": "Mysterious"},
                {"text": "Anna ask.", "voice": "Narrator", "tone": "Calm"},
                {"text": "Did you hear that?", "voice": "Young Female", "tone": "Nervous"},
                {"text": "Yeah! It sounded like an adventure waiting to happen!", "voice": "Boy", "tone": "Excited"},
                {"text": "Jack said excited.", "voice": "Narrator", "tone": "Calm"},
                {"text": "Stay close, children. This forest hides more than just secrets.", "voice": "Old Male", "tone": "Serious"}
                {"text": "Mysterious old man warn the 2 kids.", "voice": "Narrator", "tone": "Calm"},
            ],
            background_music: [
                { type: "sad", start_time: 0:01, end_time: 0:29 },
                { type: "dramatic", start_time: 0:30, end_time: 0:60 },
            ]
        }

    
    `

    handleCopyToClipboard(text)
    message.success('Copy Audio Promtp Success')
  }

  const handleGenerateAudio = async () => {
    try {
      setCreateAudioLoading(true)
      const response = await generateAudio({
        ...videoItem,
        video_item_id: videoItem.id,
      })
      setMp3Base64(response.data.mp3_object)
      setMp3Duration(response.data.mp3_time_period)
    } catch (error) {
      console.error('Error generating audio:', error)
      message.error('Error create audio')
    } finally {
      setCreateAudioLoading(false)
    }
  }

  return (
    <HeaderSytled style={{ padding: 20 }}>
      <Typography
        variant='h5'
        style={{
          marginTop: 20,
          borderLeft: '5px solid blue',
        }}
      >
        <h3 style={{ marginLeft: '20px' }}> I. Edit Video Item </h3>
      </Typography>

      {/* Info Section */}
      <Typography variant='h6' style={{ marginTop: 20 }}>
        I. Info
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DisabledTextField>
            <TextField
              label='Idea'
              fullWidth
              value={videoItem.json_object.idea}
              disabled
              size='small'
            />
          </DisabledTextField>
        </Grid>
        <Grid item xs={4}>
          <DisabledTextField>
            <Select
              title={
                'Description : ' +
                typeOptions.find((t) => t.value === videoItem.json_object.type)?.description +
                '\n\n' +
                'World Building : ' +
                typeOptions.find((t) => t.value === videoItem.json_object.type)?.world_building
              }
              value={videoItem.json_object.type}
              style={{ width: 250 }}
              disabled
              size='small'
            >
              {typeOptions.map((t) => (
                <MenuItem key={t.value} value={t.value}>
                  {t.label}
                </MenuItem>
              ))}
            </Select>
          </DisabledTextField>
        </Grid>
        <Grid item xs={4}>
          <DisabledTextField>
            <Select
              fullWidth
              title={
                typeOptions
                  .find((t) => t.value === videoItem.json_object.type)
                  ?.sub_types?.find((it) => it.value === videoItem.json_object.sub_type)
                  ?.description
              }
              value={videoItem.json_object.sub_type}
              disabled
              size='small'
            >
              {typeOptions
                .find((t) => t.value === videoItem.json_object.type)
                ?.sub_types.map((st) => (
                  <MenuItem key={st.value} value={st.value}>
                    {st.label}
                  </MenuItem>
                ))}
            </Select>
          </DisabledTextField>
        </Grid>
      </Grid>

      {/* Prompt Section */}
      <Typography
        variant='h6'
        style={{
          marginTop: 20,
          borderLeft: '5px solid blue',
        }}
      >
        <h3 style={{ marginLeft: '20px' }}> II. Prompt</h3>
      </Typography>

      {/* Full Story */}
      <Typography variant='subtitle1'>
        <div style={{ display: 'flex', width: '1000px' }}>
          <span
            style={{
              color: videoItem.json_object.full_story != null ? 'green' : 'red',
              width: '400px',
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            Full Story {videoItem.json_object.full_story != null ? '✅' : '❎'}
          </span>
          <Button
            onClick={handleScriptFullStory}
            style={{ width: '250px', marginRight: '20px' }}
            variant='contained'
          >
            Create Prompt
          </Button>
          <TextField
            multiline
            fullWidth
            maxRows={10}
            size='small'
            placeholder='your story here'
            value={fullStoryInput}
            onChange={(e) => setFullStoryInput(e.target.value)}
          />
          <Button onClick={handleAddFullStory} disabled={!fullStoryInput}>
            Add
          </Button>
        </div>
      </Typography>
      <DisabledTextField>
        {/* <TextField multiline fullWidth value={videoItem.json_object.full_story} disabled /> */}
        <div style={{ height: 150, width: '100%', marginTop: 20 }}>
          <DataGrid
            rows={[
              {
                id: '1',
                text: videoItem.json_object.full_story,
              },
            ]}
            columns={[
              {
                field: 'text',
                headerName: 'Full Story',
                width: 600,
                editable: true,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
            ]}
            processRowUpdate={(updatedRow: any) => {
              setVideoItem((prev) => ({
                ...prev,
                json_object: { ...prev.json_object, full_story: updatedRow.text },
              }))
              return updatedRow
            }}
          />
        </div>
      </DisabledTextField>

      {/* Audio & Background Music */}
      <Typography variant='subtitle1' style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', width: '1000px' }}>
          <span
            style={{
              color: audioRows.length && backgroundMusic.length ? 'green' : 'red',
              width: '400px',
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            Audio Content {audioRows.length && backgroundMusic.length ? '✅' : '❎'}
          </span>
          <Button
            style={{ width: '250px', marginRight: '20px' }}
            variant='contained'
            onClick={handleScriptAudioAndBackgroundMusic}
          >
            Create Prompt
          </Button>
          <TextField
            multiline
            fullWidth
            size='small'
            placeholder='{"audio_content": [...], "background_music": [...]}'
            value={audioBgInput}
            maxRows={10}
            onChange={(e) => setAudioBgInput(e.target.value)}
          />
          <Button
            onClick={handleAddAudioContent}
            disabled={
              !isValidJson(audioBgInput, 'audio_content') ||
              !isValidJson(audioBgInput, 'background_music')
            }
          >
            {audioRows.length && backgroundMusic.length ? 'Edit' : 'Add'}
          </Button>
        </div>
      </Typography>
      <div style={{ marginBottom: '8px', marginTop: '8px' }}>
        <Button
          style={{ width: '250px', marginRight: '20px' }}
          variant='contained'
          disabled={!(audioRows.length && backgroundMusic.length) || createAudioLoading}
          onClick={handleGenerateAudio}
        >
          {mp3Base64 ? 'Recreate' : 'Create'} Audio {createAudioLoading ? ' (Loading...)' : ''}
        </Button>
        {mp3Base64 && (
          <div>
            <p>Audio Duration: {mp3Duration} seconds</p>
            <audio controls>
              <source src={`data:audio/mp3;base64,${mp3Base64}`} type='audio/mp3' />
            </audio>
          </div>
        )}
      </div>
      <DisabledTextField>
        <div style={{ width: '100%', marginTop: 20 }}>
          <DataGrid
            rows={audioRows}
            style={{ height: '250px' }}
            columns={[
              {
                field: 'text',
                headerName: 'Text',
                width: 300,
                editable: true,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
              {
                field: 'voice',
                headerName: 'Voice',
                width: 200,
                editable: false,
                headerClassName: 'styled-table-header',
              },
              {
                field: 'tone',
                headerName: 'Tone',
                width: 200,
                editable: false,
                headerClassName: 'styled-table-header',
              },
            ]}
            processRowUpdate={(updatedRow) => {
              setVideoItem((prev) => {
                const newAudioContent =
                  prev.json_object.audio_content?.length > 0
                    ? [...prev.json_object.audio_content]
                    : []
                newAudioContent[updatedRow.id] = {
                  text: updatedRow.text,
                  voice: updatedRow.voice,
                  tone: updatedRow.tone,
                }
                return {
                  ...prev,
                  json_object: { ...prev.json_object, audio_content: newAudioContent },
                }
              })
              return updatedRow
            }}
          />
        </div>
        <DataGrid
          rows={backgroundMusic}
          style={{ height: '250px' }}
          columns={[
            {
              field: 'type',
              headerName: 'type',
              width: 300,
              editable: true,
              headerClassName: 'styled-table-header',
            },
            {
              field: 'start_time',
              headerName: 'start_time',
              width: 200,
              editable: false,
              headerClassName: 'styled-table-header',
            },
            {
              field: 'end_time',
              headerName: 'end_time',
              width: 200,
              editable: false,
              flex: 1,
              headerClassName: 'styled-table-header',
            },
          ]}
        />
      </DisabledTextField>
      {/* Full Image Prompt */}
      <Typography variant='subtitle1' style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', width: '800px' }}>
          <span
            style={{
              color: imageRows.length ? 'green' : 'red',
              width: '400px',
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            Image Prompt {imageRows.length ? '✅' : '❎'}
          </span>

          <Button
            style={{ width: '250px', marginRight: '20px' }}
            variant='contained'
            onClick={handleScriptImageGeneration}
          >
            Create Prompt
          </Button>
          <TextField
            multiline
            fullWidth
            maxRows={10}
            size='small'
            placeholder='{"full_image_prompt": [...]}'
            value={imagePromptInput}
            onChange={(e) => setImagePromptInput(e.target.value)}
          />
          <Button
            disabled={imagePromptInput ? !isValidArray(imagePromptInput) : true}
            onClick={handleAddImagePrompt}
          >
            {' '}
            {imageRows.length ? 'Edit' : 'Add'}
          </Button>
        </div>
      </Typography>
      <DisabledTextField>
        <div style={{ height: 200, width: '100%', marginTop: 20 }}>
          <DataGrid
            rows={imageRows}
            columns={[
              {
                field: 'id',
                headerName: 'id',
                width: 200,
                editable: true,
                flex: 1,
                headerClassName: 'styled-table-header',
                renderCell: (params) => (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{params.value}</span>
                    <Button
                      variant='contained'
                      size='small'
                      onClick={() => generateChildrenVideo(params.value, params.row)}
                    >
                      Generate
                    </Button>
                  </div>
                ),
              },

              {
                field: 'name',
                headerName: 'Name',
                width: 200,
                editable: true,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
              {
                field: 'prompt',
                headerName: 'Prompt',
                width: 300,
                editable: true,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
              {
                field: 'background_movement',
                headerName: 'Movement',
                width: 200,
                editable: false,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
              {
                field: 'background_effect',
                headerName: 'Effect',
                width: 200,
                editable: false,
                flex: 1,
                headerClassName: 'styled-table-header',
              },
            ]}
            processRowUpdate={(updatedRow) => {
              setVideoItem((prev) => {
                const newImagePrompt = [...prev.json_object.full_image_prompt]
                newImagePrompt[updatedRow.index] = {
                  ...newImagePrompt[updatedRow.index],
                  name: updatedRow.name,
                  prompt: updatedRow.prompt,
                  background_movement: updatedRow.background_movement,
                  background_effect: updatedRow.background_effect,
                }
                return {
                  ...prev,
                  json_object: { ...prev.json_object, full_image_prompt: newImagePrompt },
                }
              })
              return updatedRow
            }}
          />
        </div>
      </DisabledTextField>
      <Button
        variant='contained'
        color='primary'
        style={{ marginTop: 20 }}
        onClick={handleSaveChanges}
      >
        Save Changes
      </Button>
    </HeaderSytled>
  )
}

export default VideoItemEdit
