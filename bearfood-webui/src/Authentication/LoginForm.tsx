import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Box, FormControl } from '@mui/material';
import exampleImage from '../assets/icon.png'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const login = () => {
    fetch('http://localhost:5025/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("DATA" + data.status);
        if (data.accessToken != null) {
          navigate("/dashboard")
        } else{
          setError("Invalid username or password!");
        }
      })
      .catch(error => alert(error));
  }

    return (
        <Box sx={boxStyle}>
        <Card sx={cardStyle}>
        <img src={exampleImage} alt="Example" width='180' height='auto'/>

        <Stack>
            <TextField className='TextField' id="outlined-basic" label="Email" required variant="outlined" sx={textFieldStyles}
              value={email}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
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
               value={password}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
             />
            </FormControl>
            {error ? <i style={{ color: 'red' }}>{error}</i> : null}
            <Button sx={buttonStyle} variant="contained" onClick={login}>Login</Button>
            <Link style={{margin: 10}} to="/register">Not a member yet? Sign up here! </Link>
        </Stack>
        </Card>
        </Box>
    );
}

const textFieldStyles = {
    margin: '5px'
};

const buttonStyle = {
    'margin-top': '30px'
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