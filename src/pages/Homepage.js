import React from 'react';
import Header from '../components/header';
import { GridList, GridListTile, GridListTileBar, makeStyles, Paper } from '@material-ui/core';
import { Card, Grid, Toolbar, Typography } from '@material-ui/core';
import Box from '../components/box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 275,
        backgroundColor: theme.palette.primary.dark,
    },
    box: {
        borderRadius: '5px',
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        fontSize: 14,
    },
    titleBar: {
        fontStyle: 'oblique',
        color: theme.palette.primary.light,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "1px 1px 6px grey",
        fontStyle: 'oblique',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Header />
            <Grid container direction="col" spacing={1} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        hi :)
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>
        </main>
    );
}