import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material'
import Constant from '../../Constant'
import { Reorder } from 'framer-motion'
import DeleteIcon from '@mui/icons-material/Delete'

const language = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'HiEnglish',
    label: 'HiEnglish',
  },
  {
    value: 'Hindi',
    label: 'Hindi',
  },
]

const CourseIntroForm: React.FC = () => {
  const [items, setItems] = useState([] as any)
  const [currentContent, setCurrentContent] = useState('' as any)

  const handleContentValue = (event: any) => {
    setCurrentContent(event.target.value)
  }

  const handleAddButton = () => {
    setItems([...items, currentContent])
    setCurrentContent('')
  }

  const handleContentDelete = (value: any) => {
    const index = items.indexOf(value)
    if (index > -1) {
      const updatedItems = [...items]
      updatedItems.splice(index, 1)
      setItems(updatedItems)
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          alignItems: 'space-between',
          padding: '40px',
          backgroundImage: Constant.backgroundImage.gradientCyan1,
        }}
      >
        <FormControl>
          <TextField label="Mentor Name" name="mentorName" variant="outlined" />
          <TextField
            sx={{ marginTop: '5px' }}
            label="Course Title"
            name="courseTitle"
            variant="outlined"
          />
          <TextField
            sx={{ marginTop: '20px' }}
            id="outlined-multiline-static"
            label="Brief Description"
            name="briefDescription"
            multiline
            rows={2}
            defaultValue="Default Value"
          />
          <TextField
            sx={{ marginTop: '20px' }}
            label="Intro Video URL"
            name="courseTitle"
            variant="outlined"
          />
          <TextField
            sx={{ marginTop: '5px' }}
            label="Thumbnail URL"
            name="courseTitle"
            variant="outlined"
          />
          <TextField
            sx={{ marginTop: '20px' }}
            id="outlined-multiline-static"
            label="Course Detailed Description"
            name="courseDetailedDescription"
            multiline
            rows={3}
            defaultValue="Default Value"
          />

          <TextField
            sx={{ marginTop: '20px' }}
            id="outlined-select-currency"
            select
            label="Select Your Course Language"
            defaultValue="EUR"
          >
            {language.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: 'flex' }}>
            <TextField
              sx={{ marginTop: '2%', width: '50%' }}
              value={currentContent}
              onChange={handleContentValue}
              label="Course Content"
              name="CourseDescription"
              variant="outlined"
            ></TextField>
            <Button
              onClick={handleAddButton}
              variant="contained"
              size="small"
              sx={{ marginLeft: '2%', height: '70%', marginTop: '2.5%' }}
            >
              Add
            </Button>
          </Box>
          <Box>
            <Reorder.Group axis="y" values={items} onReorder={setItems}>
              {items.map((item: any) => (
                <Reorder.Item key={item} value={item}>
                  <Box sx={{ display: 'flex' }}>
                    <Card sx={{ width: '50%', padding: '2%', margin: '1%' }}>
                      {item}
                    </Card>
                    <Button onClick={() => handleContentDelete(item)}>
                      <DeleteIcon sx={{ color: 'red' }} />
                    </Button>
                  </Box>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </Box>
        </FormControl>
      </Card>
    </Box>
  )
}

export default CourseIntroForm
