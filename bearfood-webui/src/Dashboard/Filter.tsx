import TextField from '@mui/material/TextField';
import { useStore } from '../Context/useStore';

export default function Filter() {
    const { filterText, filter } = useStore();

    return (
        <TextField
            className='TextField'
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            value={filterText || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => filter(event.target.value)}
        />
    );
}