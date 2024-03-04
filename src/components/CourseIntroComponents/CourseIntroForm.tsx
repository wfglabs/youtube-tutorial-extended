import React from 'react';
import { Box, Typography, Button, Card, TextField, FormControl, Select, MenuItem,InputLabel} from '@mui/material';
import Constant from '../../Constant';

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
  ];

  
const CourseIntroForm: React.FC = () => {
    return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <Card sx={{display:'flex', flexDirection:'column', width:'50%', alignItems:'space-between', padding:'40px', backgroundImage:Constant.backgroundImage.gradientCyan1}}>
    <FormControl>
    <TextField
      label="Mentor Name"
      name="mentorName"
      variant="outlined"
    />
    <TextField
      sx={{marginTop: '5px'}}
      label="Course Title"
      name="courseTitle"
      variant="outlined"
    />
    <TextField
          sx= {{marginTop: '20px'}}
          id="outlined-multiline-static"
          label="Brief Description"
          name = "briefDescription"
          multiline
          rows={2}
          defaultValue="Default Value"
    />
    <TextField
      sx={{marginTop: '20px'}}
      label="Intro Video URL"
      name="courseTitle"
      variant="outlined"
    />
    <TextField
      sx={{marginTop: '5px'}}
      label="Thumbnail URL"
      name="courseTitle"
      variant="outlined"
    />
    <TextField
          sx= {{marginTop: '20px'}}
          id="outlined-multiline-static"
          label="Course Detailed Description"
          name = "courseDetailedDescription"
          multiline
          rows={3}
          defaultValue="Default Value"
    />
            
            <TextField
            sx={{marginTop: '20px'}}
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

    
  </FormControl>
  </Card>
  </Box>
);
}

export default CourseIntroForm;