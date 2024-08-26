import {Button, Stack, Box} from '@mui/material';
import { useAuth } from '../Context/useAuth';
import bearfoodImage from '../assets/icon-transparent.png'
import RecipeList from './RecipeList';
import { useStore } from '../Context/useStore';
import SelectedRecipe from './SelectedRecipe';

export default function Dashboard(){
    var {logout, user} = useAuth();
    var { selectedRecipe } = useStore();
    return (
        <div>
        <Box sx={headerStyle}>
            <Stack direction='row'  alignItems="center" justifyContent="space-between">
            <Stack direction='row' alignItems="center">
                <img src={bearfoodImage} alt="Bearfood" width='70' height='auto'/>
                <p style={{color:'white', fontSize: 20}}>Foodbear</p>

            </Stack>
            <p style={{color:'white', fontSize: 20}}>Welcome {user?.fullName}!</p>
            <Button sx={buttonStyle} variant="contained" onClick={logout}>
                Log out
            </Button>
            </Stack>
        </Box>
        <Box sx={contentBoxStyle}>
        <Stack direction='row' justifyContent='space-between'>
            <RecipeList/>
            {selectedRecipe ? <SelectedRecipe/> : null}
        </Stack>
        </Box>
        </div>
    )
}

const buttonStyle = {
    cursor: 'pointer',    
    width: '140px',
    height: '40px',
    margin: '10px'
};

const headerStyle = {
    background: 'rgb(56, 85, 89)',
    padding: `5px`,
};
  
const contentBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width : '95%',
    height: '80vh',
    padding: '20px'
};
