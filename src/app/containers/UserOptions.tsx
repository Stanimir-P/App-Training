import Login from "./Login";
import { createStyles, makeStyles } from '@mui/styles';
import ChangePassword from "./ChangePassword";

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

            <ChangePassword />
        </div>
    );
}