import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function LoginForm(){
    return (
        <Stack sx={stackStyle}>    

            <h1>Welcome to Bearfood!</h1>
            <TextField className='TextField' id="outlined-basic" label="Username" required variant="outlined" sx={textFieldStyles} />
            <TextField className='TextField' id="outlined-basic" label="Password" required variant="outlined" sx={textFieldStyles}/>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Login</Button>
                <Button variant="contained">Register</Button>
            </Stack>
        </Stack>
    );
}

const textFieldStyles = {
    margin: '5px'
};

const stackStyle = {
    height: '100vh',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
};

export default LoginForm;