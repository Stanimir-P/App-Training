import { createStyles, makeStyles } from '@mui/styles';
import React, { useContext } from "react";
import logo from '../../images/PP-logo.png';
import { DrawerComponent } from './Drawer';
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { AuthContext } from "../../context/AuthContext";
import { Login, Person } from '@mui/icons-material';

const useStyles = makeStyles(() => createStyles({
    toolbar: {
        justifyContent: 'space-between',
        background: '#ffffff'
    },

    logo: {
        flexGrow: 'initial',
        cursor: 'pointer',
        maxHeight: '50px',
        paddingTop: '3px',
        width: 'auto',
        imageRendering: 'crisp-edges',
    },

    link: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginLeft: '20px',
    },

    rightSide: {
        display: 'flex',
        alignItems: 'center',
    }
}));

export const Navigation: React.FunctionComponent = () => {
    const user = useContext(AuthContext);

    const classes = useStyles();

    return (
        <AppBar position="absolute" style={{zIndex: 2}} sx={{ width: '100%' }}>
            <CssBaseline />
            <Toolbar className={classes.toolbar}>
                <Link to="/" >
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>

                <div className={classes.rightSide}>
                    <DrawerComponent />

                    <Link to="/login">
                        {!user ?
                            (
                                <Login fontSize="medium" className={classes.link} />
                            ) : (
                                <Person fontSize="medium" className={classes.link} />
                            )
                        }
                    </Link>
                </div>
            </Toolbar>
        </AppBar >
    );
}