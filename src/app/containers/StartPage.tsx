import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const StartPage: React.FunctionComponent<{}> = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button
                style={{
                    marginTop: '40px',
                    marginLeft: '70px'
                }}
                component={Link} to="/about"
                onClick={() => console.log('Button clicked')}
                variant={'outlined'}
                sx={{
                    color: 'white',
                    border: '1px solid white',
                    transition: '0.7s',
                    
                    '&:hover': {
                        backgroundColor: '#ffffff42',
                        borderColor: 'white'
                      },                    
                }}
            >
                About
            </Button>
        </div>
    );
}