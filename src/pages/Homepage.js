import React from 'react';
import { GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { Box, Card, Grid, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 200,
        overflowX: 'hidden',
    },
    box: {
        borderRadius: '5px',
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
    homeContent: {
        padding: theme.spacing(1),
        overflowX: 'hidden',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main className={classes.root} >
            <Toolbar />
            <Grid container direction="col" spacing={1} className={classes.homeContent}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        hi
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.homeContent}>
                <Grid item xs={12} sm={8}>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.box}>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.box}>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>

                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid>
                <Grid item xs={12} sm={8}>

                </Grid>
            </Grid>
        </main>
    );
}