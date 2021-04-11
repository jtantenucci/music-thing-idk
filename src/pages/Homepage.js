import React from 'react';
import MusicCard from '../components/musicCard';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pageHead: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 20,
          },
        paddingBottom: 20,
        paddingLeft: 10,
        fontSize: 50,
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 6px #AACDA2",
        fontStyle: 'oblique',
    },
    pageHeadOpen: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 20,
          },
        paddingBottom: 20,
        paddingLeft: 10,
        fontSize: 50,
        justifySelf: 'center',
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 6px #AACDA2",
        fontStyle: 'oblique',
    },
}));

export default function Home({ token, tracks, contentOpen }) {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} justify={contentOpen ? "center" : "flex start"}>
                <Typography variant="h2" className={contentOpen ? classes.pageHeadOpen : classes.pageHead}>
                    songs you've enjoyed lately: 
                </Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item>
                    <MusicCard token={token} tracks={tracks} contentOpen={contentOpen} />
                </Grid>
                <Grid item>
                    <Typography variant="h2" className={classes.pageHead}>
                        songs for the weather: 
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}