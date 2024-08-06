import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
import { Box } from '@mui/material';
import exampleImage from '../assets/icon.png'

function LoginForm(){
    return (
        <Box sx={boxStyle}>
        <Card sx={cardStyle}>
        <img src={exampleImage} alt="Example" width='200' height='auto'/>

        <Stack>
            <TextField className='TextField' id="outlined-basic" label="Username" required variant="outlined" sx={textFieldStyles} />
            <TextField className='TextField' id="outlined-basic" label="Password" required variant="outlined" sx={textFieldStyles}/>
            <Button sx={buttonStyle} variant="contained">Login</Button>
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