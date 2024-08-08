import React from 'react';
import { Box, Card, TextField, Button,
    Stack, FormControl, InputLabel,
    OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function RegisterForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
        <Box sx={boxStyle}>
        <Card sx={cardStyle}>
            <h2>Welcome!</h2>
            <Stack direction="row" sx={stackStyle}>
                <PersonIcon/>
                <TextField className='TextField' id="outlined-basic" label="Full Name" required variant="outlined" sx={textFieldStyles} />
            </Stack>
            
            <Stack direction="row" sx={stackStyle}>
                <EmailIcon/>
                <TextField className='TextField' id="outlined-basic" label="Email Address" required variant="outlined" sx={textFieldStyles} />
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                <LockIcon/>
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
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                <LockIcon/>
                <FormControl sx={textFieldStyles} variant="outlined">
                     <InputLabel htmlFor="outlined-adornment-password">Confirm Password *</InputLabel>
                     <OutlinedInput
                       id="outlined-adornment-password"
                       type={showPasswordConfirm ? 'text' : 'password'}
                       endAdornment={
                         <InputAdornment position="end">
                           <IconButton
                             aria-label="toggle password visibility"
                             onClick={handleClickShowPasswordConfirm}
                             onMouseDown={handleMouseDownPassword}
                             edge="end"
                           >
                             {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                           </IconButton>
                         </InputAdornment>
                       }
                       label="PasswordConfirm"
                     />
                </FormControl>
            </Stack>
        
            <Button sx={buttonStyle} variant="contained">Register</Button>
        </Card>
        </Box>
    )
}

const textFieldStyles = {
    margin: '5px',
    width: '100%',
};

const buttonStyle = {
    'margin-top': '30px',
    'background-color': 'rgba(131,165,173, 1)'
};

const stackStyle ={
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
}

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

export default RegisterForm;