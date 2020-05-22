import React from 'react';
import { Grid, Box } from '@material-ui/core'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import useStyles from './ui';

export function Loading() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" justify="center" >
                <Box className={classes.icon}>
                <GraphicEqIcon/>
                <GraphicEqIcon/>
                </Box>
                LOADING
            </Grid>
        </div>
    );
};