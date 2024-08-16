import {Card, List, ListItem, ListItemText} from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllRecipe } from "./Service";

export default function RecipeList(){
    const [recipeNames, setRecipeNames] = useState<string[]>([]);

    useEffect(() => {
        getAllRecipe(() => console.log("error"))
        .then(recipes => {
            setRecipeNames(recipes.map(r => r.title).sort());
        });
    }, []);

    return (
        <Card sx={contentBoxStyle}>
            <List sx={listStyle}>
                {recipeNames.map((recipe, index) => (
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
