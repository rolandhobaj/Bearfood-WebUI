import { Box, Card, TextField, Button, Stack  } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function RegisterForm() {
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
                <TextField className='TextField' id="outlined-basic" label="Password" required variant="outlined" sx={textFieldStyles} />
            </Stack>

            <Stack direction="row" sx={stackStyle}>
                <LockIcon/>
                <TextField className='TextField' id="outlined-basic" label="Password" required variant="outlined" sx={textFieldStyles} />
            </Stack>
        
            <Button sx={buttonStyle} variant="contained">Register</Button>
        </Card>
        </Box>
    )
}

const textFieldStyles = {
    margin: '5px'
};

const buttonStyle = {
    'margin-top': '30px',
    'background-color': 'rgba(131,165,173, 1)'
};

const stackStyle ={
    alignItems: 'center',
    justifyContent: 'center',
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