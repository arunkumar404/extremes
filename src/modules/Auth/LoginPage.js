import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Typography,
  styled,
} from '@mui/material'
import React, { useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: '400px',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  }))

  return (
    <Box pb={'10rem'} className='loginPageContainer'>
      <Typography variant='h4' mt={10}>
        LOGIN
      </Typography>
      <Box className='inputsContainer'>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='email-input' className='labelText'>
            EMAIL
          </InputLabel>
          <BootstrapInput
            defaultValue=''
            id='email-input'
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Box style={{ position: 'relative' }}>
          <Button
            variant='text'
            sx={{
              position: 'absolute',
              top: '-10px',
              right: 0,
              color: '#161616',
              fontSize: '.8rem',
            }}
          >
            Forgot Password ?
          </Button>
          <FormControl variant='standard'>
            <InputLabel shrink htmlFor='email-input' className='labelText'>
              PASSWORD
            </InputLabel>
            <BootstrapInput
              defaultValue=''
              id='email-input'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Box>
        <Button
          fullWidth
          variant='contained'
          sx={{
            paddingBlock: '10px',
            borderRadius: '2px',
            backgroundColor: '#000000',
            letterSpacing: '2px',
          }}
        >
          SIGN IN
        </Button>
        <Button
          variant='text'
          sx={{
            color: '#161616',
            fontSize: '.8rem',
          }}
          onClick={() => navigate('/signup')}
        >
          CREATE ACCOUNT
        </Button>
      </Box>
    </Box>
  )
}

export default LoginPage
