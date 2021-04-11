import React from 'react';
import { makeStyles, Typography, Grid, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
        textAlign: 'center',
    },
    cover: {
        flexShrink: 0,
        height: 175,
        width: 175,
      },
}))
  

export default function Profile({ username, followers, profileLink, userImage }) {
    const classes = useStyles();
    var lowerName = username.toLowerCase();
    return (
            <>
                <Grid container justify="space-between">
                    <Grid container xs={8} spacing={3}>
                        <Typography variant="h2" className={classes.pageHead}>
                            welcome to {lowerName}'s account :)
                        </Typography>
                    </Grid>
                    <Grid spacing={3}>
                        <CardMedia
                            className={classes.cover}
                            image={userImage}
                            alt={username}
                            title="image to pull from spotify api"
                        />
                    </Grid>
                    <Grid container justify="flex-start" spacing={3}>
                        <Grid item xs={12}>
                        <Typography color="textSecondary" className={classes.pageHead}>
                            {followers} followers
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary" className={classes.pageHead}>
                                link to profile:
                                <a href={profileLink}>
                                    {profileLink}
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>
    );
}