import React from 'react';
import { makeStyles, Typography, Grid, CardMedia, CssBaseline, Card } from '@material-ui/core';
import ArtistCard from '../components/artistCard';
import { useEffect, useState } from 'react';
import ProfileTrackCard from '../components/profileTracksCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
        textAlign: 'center'
    },
    cover: {
        flexShrink: 0,
        height: 175,
        width: 175,
    },
}))


export default function Profile({ username, followers, userImage, contentOpen, spotify }) {
    const classes = useStyles();
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        spotify.getMyTopArtists({ time_range: 'short_term', limit: 5 }).then(topArtists => {
            setTopArtists(topArtists.items);
        })

        spotify.getMyTopTracks({ time_range: 'short_term', limit: 5 }).then(topTracks => {
            setTopTracks(topTracks.items);
        })

    }, [spotify])

    var lowerName = username.toLowerCase();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Grid container spacing={3} justify="center">
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.pageHead}>
                        {lowerName}
                    </Typography>
                    <Typography color="textSecondary" className={classes.pageHead}>
                        {followers} followers
                        </Typography>
                    <CardMedia
                        className={classes.cover}
                        image={userImage}
                        alt={username}
                        title="image to pull from spotify api"
                    />
                </Grid>
                <Grid item xs={12} spacing={3}>
                    <Typography variant="h2" className={classes.pageHead}>
                        my top artists this month:
                    </Typography>
                    <Grid item xs={12} spacing={3}>
                        <ArtistCard topArtists={topArtists} contentOpen={contentOpen} />
                    </Grid>
                </Grid>
                <Grid item xs={12} spacing={3}>
                    <Typography variant="h2" className={classes.pageHead}>
                        my top tracks this month:
                    </Typography>
                    <Grid item xs={12} spacing={3}>
                        <ProfileTrackCard tracks={topTracks} contentOpen={contentOpen} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}