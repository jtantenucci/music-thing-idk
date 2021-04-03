import React from 'react';
import MusicCard from '../components/musicCard';
import { makeStyles, Grid, Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pageHead: {
        fontSize: 50,
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 6px #AACDA2",
        fontStyle: 'oblique',
    },
    pageHeadOpen: {
        fontSize: 50,
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 6px #AACDA2",
        fontStyle: 'oblique',
    },
}));

export default function Home({token, tracks, contentOpen}) {
    const classes = useStyles();
    

    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={contentOpen ? classes.pageHeadOpen : classes.pageHead}>
                        songs you've enjoyed lately: 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <MusicCard token={token} tracks={tracks} contentOpen={contentOpen}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.pageHead}>
                        songs your friends are listening to: 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.pageHead}>
                        songs for the weather: 
                        </Typography>
                    </Grid>
                </Grid>


            </div>
    );
}