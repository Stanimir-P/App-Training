import { Button, Card, CardActions, CardContent, CardHeader, Container, TextField, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { auth } from '../../firebaseSetup';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainDiv: {
            height: '100vh',
            top: '50%',
            left: '50%',
            color: 'white',
            display: 'flex',
            paddingTop: '20px',
            overflow: 'hidden',
            maxWidth: '1000px',
        },
        
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
            justifyContent: 'center',
        },
        
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: theme.spacing(10),
        },
        
    })
);

const ChangePassword = () => {
    const classes = useStyles();
    const history = useHistory();

    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => { setNewPassword(event.target.value) };

    const changePassword = () => {
        const currUser = auth.currentUser;

        currUser?.updatePassword(newPassword)
            .then(() => {
                alert('The password has been changed!');
                history.push('/');
            })
            .catch(() => alert("Oops, an error occurred!"));
    };

    return (
        <Container className={classes.mainDiv}>
            <Box component="form"
                className={classes.container}
                noValidate
                autoComplete="off">

                <Card className={classes.card}>
                    <CardHeader className={classes.header} title='Change your password' />
                    <CardContent>
                        <TextField
                            required
                            fullWidth
                            id="change-password"
                            type="password"
                            label="New Password"
                            margin="normal"
                            onChange={handlePasswordChange}
                        />
                    </CardContent>
                    <CardActions>
                        <Container>
                            <Button
                                variant="contained"
                                onClick={changePassword}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Set new password
                            </Button>
                        </Container>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
}

export default ChangePassword;