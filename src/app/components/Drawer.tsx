import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Home, Phone, AirplaneTicket, Info, Login, Person } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
        },
        icon: {
            color: "white"
        }
    })
);

export const DrawerComponent: React.FunctionComponent = () => {
    const user = useContext(AuthContext);

    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();

    const CloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <Fragment>
            <Drawer
                style={{ position: 'relative', zIndex: 1 }}
                open={openDrawer}
                onClose={CloseDrawer}
                anchor="right"
            >
                <List  sx={{ pt: '60px' }}>
                    <ListItem onClick={CloseDrawer}>
                        <Home fontSize="medium" />

                        <ListItemText>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <Info fontSize="medium" />

                        <ListItemText>
                            <Link className={classes.link} to="/about">About</Link>
                        </ListItemText>
                    </ListItem>


                    <ListItem onClick={CloseDrawer}>
                        {!user ?
                            (
                                <Login fontSize="medium" />
                            ) : (
                                <Person fontSize="medium" />
                            )}

                        <ListItemText>
                            <Link className={classes.link} to="/login">
                                {!user ? ('Login') : ('User')}
                            </Link>
                        </ListItemText>
                    </ListItem>



                    <ListItem onClick={CloseDrawer}>
                        <Phone fontSize="medium" />

                        <ListItemText>
                            <Link className={classes.link} to="/contactsUs">Contact us</Link>
                        </ListItemText>
                    </ListItem>

                    {!user ?
                        (null) : (
                            <ListItem onClick={CloseDrawer}>
                                <AirplaneTicket fontSize="medium" />

                                <ListItemText>
                                    <Link className={classes.link} to="/tickets">Tickets</Link>
                                </ListItemText>
                            </ListItem>
                        )
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Fragment>
    );
}