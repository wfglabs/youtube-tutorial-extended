import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
} from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SearchIcon from '@mui/icons-material/Search'

const TopNavBar = () => {
  const handleSignUpButton = () => {
    window.location.href = '/signup'
  }

  const handleLogInButton = () => {
    window.location.href = '/login'
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              color: 'black',
              fontSize: '20px',
              marginLeft: '20px',
              fontWeight: '1000',
              fontFamily: 'cursive',
            }}
          >
            Tutorial Extended
          </Typography>
          <YouTubeIcon
            style={{ color: 'blue', marginLeft: '10px', fontSize: 45 }}
          />
          <Box
            sx={{
              margin: 'auto',
              padding: '2px',
              flex: '0 0 50%',
              borderRadius: '25px',
              border: '1px solid #ccc',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
              }}
            >
              <SearchIcon sx={{ marginRight: '8px' }} />
              <InputBase
                placeholder="Search..."
                fullWidth
                sx={{
                  borderRadius: '25px',
                  border: 'none',
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              />
            </div>
          </Box>
          <Box>
            <Button
              onClick={handleLogInButton}
              sx={{
                color: 'white',
                backgroundColor: '#1976d2',
                fontWeight: '500',
                border: '1px solid #ccc',
                padding: '4px',
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                },
                '&:hover': { backgroundColor: '#1976d2' },
                marginRight: '8px',
              }}
            >
              Log in
            </Button>
            <Button
              onClick={handleSignUpButton}
              sx={{
                color: 'black',
                fontWeight: '500',
                border: '1px solid #ccc',
                padding: '4px',
                textTransform: 'none',
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopNavBar
