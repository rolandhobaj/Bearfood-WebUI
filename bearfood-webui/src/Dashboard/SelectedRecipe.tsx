import { useStore } from '../Context/useStore';
import Card from "@mui/material/Card";

export default function SelectedRecipe() {
    const { selectedRecipe } = useStore();

    return (
        <Card sx={cardStyle}>
            <h2>{selectedRecipe}</h2>
        </Card>
    )
}


const cardStyle = {
    width: '100%',
    marginLeft: 1,
};
