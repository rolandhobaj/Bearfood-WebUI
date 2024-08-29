import {Card, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { useEffect, useState } from 'react';
import { useStore } from '../Context/useStore';
import { getAllRecipe } from "./Service";
import Filter from './Filter';
import { Recipe } from './Recipe';

export default function RecipeList(){
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { filterText, selectedRecipe, select } = useStore();

    useEffect(() => {
        getAllRecipe(() => console.log("error"))
        .then(recipes => {
            setRecipes(recipes.sort((a, b) => a.title.localeCompare(b.title)));
            if (recipes.length != 0){
                select(recipes[0]);
            }
        })
    }, []);

    return (
        <Card sx={contentBoxStyle}>
            <Filter/>
            <List sx={listStyle}>
                {recipes.filter(s => s.title.toLowerCase().includes(filterText?.toLowerCase() ?? "")).map((recipe, index) => (
                    <ListItem key={index} disablePadding sx={{
                        bgcolor: recipe == selectedRecipe ? 'rgb(56, 85, 89, 0.4)' : 'white',
                        '&:hover': {
                            backgroundColor: 'rgb(56, 85, 89, 0.4)',
                        }
                    }}>
                        <ListItemButton onClick={() => select(recipe)}>
                            <ListItemText primary={recipe.title} />
                        </ListItemButton>
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
