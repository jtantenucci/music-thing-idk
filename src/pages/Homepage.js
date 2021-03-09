import React from 'react';
import Header from '../components/header';
import MusicCard from '../components/musicCard';
import { GridList, GridListTile, GridListTileBar, makeStyles, Paper } from '@material-ui/core';
import { Card, Grid, Toolbar, Typography } from '@material-ui/core';
import Box from '../components/box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 275,
        backgroundColor: theme.palette.primary.dark,
    },
    box: {
        borderRadius: '5px',
        backgroundColor: theme.palette.primary.dark,
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
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                       songs you might like: 
                    </Typography>
                </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        now playing with friends:
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MusicCard />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <MusicCard />
                    </Grid>
                    <Typography variant="h2" className={classes.pageHead}>
                        now playing with friends:
                    </Typography>
                    <Typography variant="h2" className={classes.pageHead}>
                        songs for your weather:
                    </Typography>
                </Grid>
            </div>
    );
}