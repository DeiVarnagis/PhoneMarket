import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HowToRegIcon from '@material-ui/icons/HowToReg';

const useStyles = makeStyles({
    root: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2%'
    }
});
export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <footer style={{ position: 'inherit' }}>
            <div className="mx-auto container-fluid">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction
                        onClick={(event) => (window.location.href = '/')}
                        label="Phones"
                        icon={<PhoneAndroidIcon />}
                    />
                    <BottomNavigationAction
                        onClick={(event) => (window.location.href = '/login')}
                        label="Login"
                        icon={<ExitToAppIcon />}
                    />
                    <BottomNavigationAction
                        onClick={(event) =>
                            (window.location.href = '/register')
                        }
                        label="Reg-in"
                        icon={<HowToRegIcon />}
                    />
                </BottomNavigation>
            </div>
        </footer>
    );
}
