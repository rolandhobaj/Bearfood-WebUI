import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Box, FormControl } from '@mui/material';
import exampleImage from '../assets/icon.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginForm(){
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

    return (
        <Box sx={boxStyle}>
        <Card sx={cardStyle}>
        <img src={exampleImage} alt="Example" width='180' height='auto'/>

        <Stack>
            <TextField className='TextField' id="outlined-basic" label="Username" required variant="outlined" sx={textFieldStyles} />
            <FormControl sx={textFieldStyles} variant="outlined">
             <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
             <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     edge="end"
                   >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               }
               label="Password"
             />
            </FormControl>
            <Button sx={buttonStyle} variant="contained">Login</Button>
            <p> Not a member yet? Sign up here!</p>
        </Stack>
        </Card>
        </Box>
    );
}

const textFieldStyles = {
    margin: '5px'
};

const buttonStyle = {
    'margin-top': '30px',
    'background-color': 'rgba(131,165,173, 1)'
};

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width : '30%',
    height: '70%',
    padding: '20px'
};

const boxStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
export default LoginForm;