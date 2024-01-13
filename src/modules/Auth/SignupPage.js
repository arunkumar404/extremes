import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Typography,
  styled,
} from '@mui/material'
import React from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {

  const navigate = useNavigate()

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
    <Box className='loginPageContainer'>
      <Typography variant='h4' mt={10}>
        CREATE ACCOUNT
      </Typography>
      <Box className='inputsContainer'>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='email-input' className='labelText'>
            FIRST NAME
          </InputLabel>
          <BootstrapInput defaultValue='' id='email-input' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='email-input' className='labelText'>
            LAST NAME
          </InputLabel>
          <BootstrapInput defaultValue='' id='email-input' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='email-input' className='labelText'>
            EMAIL
          </InputLabel>
          <BootstrapInput defaultValue='' id='email-input' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel shrink htmlFor='email-input' className='labelText'>
            PASSWORD
          </InputLabel>
          <BootstrapInput defaultValue='' id='email-input' />
        </FormControl>

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
          CREATE
        </Button>
        <Button
          variant='text'
          sx={{
            color: '#161616',
            fontSize: '.8rem',
          }}
          onClick={()=>navigate('/login')}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  )
}

export default SignupPage
