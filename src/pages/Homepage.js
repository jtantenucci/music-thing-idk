import React from 'react';
import MusicCard from '../components/musicCard';
import { makeStyles, Grid, Typography  } from '@material-ui/core';

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
        textAlign: 'center',
    },
}));

export default function Home({token, tracks}) {
    const classes = useStyles();
    

    return (
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.pageHead}>
                        songs you've enjoyed lately: 
                        </Typography>
                    </Grid>
                    <Grid>
                        <MusicCard token={token} tracks={tracks}/>
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