import { useStore } from '../Context/useStore';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function SelectedRecipe() {
    const { selectedRecipe } = useStore();

    return (
        <Card sx={cardStyle}>
            <h1>{selectedRecipe?.title}</h1>
            {selectedRecipe?.imageUri && (
                <CardMedia
                    component="img"
                    image={selectedRecipe.imageUri}
                    alt={selectedRecipe.title}
                    sx={imageStyle}
                />
            )}
        </Card>
    )
}


const cardStyle = {
    width: '100%',
    marginLeft: 1,
};

const imageStyle = {
    maxWidth: '500px',
    maxHeight: '400px',
    marginLeft: 1,
    borderRadius: 2,
};
