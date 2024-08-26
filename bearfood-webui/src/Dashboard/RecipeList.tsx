import {Card, List, ListItem, ListItemText} from '@mui/material';
import { useEffect, useState } from 'react';
import { useStore } from '../Context/useStore';
import { getAllRecipe } from "./Service";
import Filter from './Filter';

export default function RecipeList(){
    const [recipeNames, setRecipeNames] = useState<string[]>([]);
    const { filterText } = useStore();

    useEffect(() => {
        getAllRecipe(() => console.log("error"))
        .then(recipes => {
            setRecipeNames(recipes.map(r => r.title).sort());
        });
    }, []);

    return (
        <Card sx={contentBoxStyle}>
            <Filter/>
            <List sx={listStyle}>
                {recipeNames.filter(s => s.toLowerCase().startsWith(filterText?.toLowerCase() ?? "")).map((recipe, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={recipe} />
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}

const contentBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width : '20%',
    height: '79vh',
    padding: '20px',
};

const listStyle = {
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '100%',
    scrollbarWidth: 'thin', // For Firefox
};
