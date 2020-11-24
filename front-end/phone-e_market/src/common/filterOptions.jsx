import React from 'react';
import { Grid, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AddButton from './floatingAddButton';

function FilterOptions(props) {
    const {
        onClick,
        cheapName,
        gameName,
        allName,
        filterName,
        screen,
        onAddClick
    } = props;
    var ifActive = { width: '100%', backgroundColor: '#9bdf46' };
    var nonActive = { width: '100%' };
    return (
        <Grid container spacing={2} style={{ paddingBottom: '3%' }}>
            <Grid item lg={2} md={3} xs={4}>
                <Button
                    name={cheapName}
                    style={cheapName === filterName ? ifActive : nonActive}
                    variant="contained"
                    color="default"
                    startIcon={<AttachMoneyIcon />}
                    onClick={() => onClick(cheapName)}
                >
                    Cheapest
                </Button>
            </Grid>
            <Grid item lg={2} md={3} xs={4}>
                <Button
                    name={gameName}
                    style={gameName === filterName ? ifActive : nonActive}
                    variant="contained"
                    color="default"
                    startIcon={<SportsEsportsIcon />}
                    onClick={() => onClick(gameName)}
                >
                    For games
                </Button>
            </Grid>
            <Grid item lg={2} md={3} xs={4}>
                <Button
                    name={allName}
                    style={allName === filterName ? ifActive : nonActive}
                    variant="contained"
                    color="default"
                    startIcon={<AllInclusiveIcon />}
                    onClick={() => onClick(allName)}
                >
                    All phones
                </Button>
            </Grid>
            <Grid
                item
                lg={6}
                md={2}
                xs={3}
                style={screen ? { textAlign: 'start' } : { textAlign: 'end' }}
            >
                <AddButton onClick={onAddClick} label="Add new phone" />
            </Grid>
        </Grid>
    );
}
FilterOptions.defaultProps = {
    cheapName: 'cheap',
    gameName: 'game',
    allName: 'all'
};
export default FilterOptions;
