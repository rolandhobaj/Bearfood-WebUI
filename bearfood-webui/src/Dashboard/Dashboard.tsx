import Button from '@mui/material/Button';
import { useAuth } from '../Context/useAuth';

export default function Dashboard(){
    var {logout} = useAuth();
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <Button sx={styles.button} variant="contained" onClick={logout}>
            Log out
        </Button>
      </div>
    )
}

const styles = {
    button: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },
  };