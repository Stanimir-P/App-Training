import Login from "./Login";
import { ResetPassword } from "./ResetPassword";
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
    userOptions: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
    },
}));

export const UserOptions: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.userOptions}>
            <Login />

            <ResetPassword />
        </div>
    );
}