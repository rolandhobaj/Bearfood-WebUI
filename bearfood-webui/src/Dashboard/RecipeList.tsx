import {Card} from '@mui/material';


export default function RecipeList(){
    return (
        <Card sx={contentBoxStyle}>
            <p>nice list</p>
        </Card>
    );
}

const contentBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width : '20%',
    height: '79vh',
    padding: '20px'
};