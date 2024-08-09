import React from 'react';
import {Errors} from './Errors'
import { Box, Card, TextField, Button,
    Stack, FormControl, InputLabel,
    OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Close from '@mui/icons-material/Close';
import Done from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const [errors, setErrors] = React.useState<Errors[]>([Errors.ToShort, Errors.DoesNotMatch, Errors.NotComplex, Errors.NoSpecialChar]);

    const [password, setPassword] = React.useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const register = () => {
        fetch('http://localhost:5025/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then(_ => {
              navigate("/")
          })
          .catch(error => alert(error));
      }
    

    const validatePassword = (pwd : string, confPwd: string) => {
        var newErrors = [];
        if (pwd.length <= 8) {
            newErrors.push(Errors.ToShort)
        }

        if (pwd !== confPwd){
            newErrors.push(Errors.DoesNotMatch)
        }
        
        const hasCapital = /[A-Z]/.test(pwd);
        const hasNumber = /\d/.test(pwd);
        if (!hasCapital || ! hasNumber){
            newErrors.push(Errors.NotComplex)
        }

        const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
        if (!hasSpecial){
            newErrors.push(Errors.NoSpecialChar)
        }

        setErrors(newErrors);
    }

    return (
        <Box sx={boxStyle}>
        <Card sx={cardStyle}>
            <h2>Welcome!</h2>
            <Stack direction="row" sx={stackStyle}>
                <PersonIcon/>
                <TextField className='TextField' id="outlined-basic" label="Full Name" required variant="outlined" sx={textFieldStyles}
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 setEmail(event.target.value);
               }} />
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
                       value={password}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                        validatePassword(event.target.value, passwordConfirm);
                      }}
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
                       value={passwordConfirm}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPasswordConfirm(event.target.value);
                        validatePassword(password, event.target.value);
                      }}
                     />
                </FormControl>
            </Stack>
        
            <Stack direction="row" sx={stackStyle}>
                {errors.includes(Errors.ToShort) ? <Close sx={{ color: 'red' }}/> : <Done sx={{ color: 'green' }}/> } 
                <div>Password shoud have atleast 8 characters</div>
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                {errors.includes(Errors.NotComplex) ? <Close sx={{ color: 'red' }}/> : <Done sx={{ color: 'green' }}/> } 
                <div>Password should contain a capital, number.</div>
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                {errors.includes(Errors.NoSpecialChar) ? <Close sx={{ color: 'red' }}/> : <Done sx={{ color: 'green' }}/> } 
                <div>Password should contain a special character.</div>
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                {errors.includes(Errors.DoesNotMatch) ? <Close sx={{ color: 'red' }}/> : <Done sx={{ color: 'green' }}/> } 
                <div>Passwords should match.</div>
            </Stack>

            <Stack direction="row" sx={stackForButtonsStyle} spacing={2} >
                <Link to="/">
                    <Button variant="contained">Back</Button>
                </Link>
                <Button color="success" variant="contained" disabled={errors.length !== 0} onClick={register}>Sign up</Button>
            </Stack>
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
};


const stackStyle ={
    alignItems: 'center',
    justifyContent: 'left',
    width: '80%'
}

const stackForButtonsStyle ={
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    'margin-top': '20px'
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