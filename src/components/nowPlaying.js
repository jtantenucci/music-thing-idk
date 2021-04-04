import { React, useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const spotify = new SpotifyWebApi();
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.palette.primary.special,
        maxWidth: '100%',
    },
    xsCard: {
        width: 200,
        height: '100%',
    },
    details: {
        fontSize: 15,
        flexShrink: 0,
        padding: 0,
        paddingRight: 5,
        height: 175,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
    },
    songTitle: {
        fontSize: 20,
        textShadow: "0.5px 0.5px 5px #AACDA2",

    },
    songArtist: {
        fontSize: 16,
    },
    div: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        marginLeft: 12,
        marginRight: 12,
    },
    songAlbum: {
        fontSize: 14,
        fontStyle: 'oblique',
    },
    cover: {
        [theme.breakpoints.down('xs')]: {
            height: 200,
            width: 200,
        },
        flexShrink: 0,
        height: 175,
        width: 175,
    },
    content: {
        paddingTop: 12,
        paddingBottom: 0,
        paddingRight: 0,
        flex: '1 0 auto',
    },
    controls: {
        paddingTop: 5,
        paddingLeft: 12,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
        '&:hover': {
            color: theme.palette.primary.light,
            textDecoration: 'none',
        },

    },
    skipIcons: {
        color: theme.palette.secondary.light,
        '&:hover': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',  
          },
          '&:active': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',  
          },
      },
      playIcon: {
        color: theme.palette.secondary.light,
        '&:hover': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',  
          },
          '&:active': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',  
          },
        height: 30,
        width: 30,
      },
    xsControls: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
    },

}));

export default function NowPlaying({ playingObject }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid item>
            <Card className={classes.root}>
                <div className={classes.xsCard}>
                    <Typography className={classes.songTitle}>
                        {playingObject.songTitle}
                    </Typography>
                    <Typography color="textSecondary" className={classes.songArtist}>
                        {playingObject.songArtist}
                    </Typography>
                    <Typography color="textSecondary" className={classes.songAlbum}>
                        {playingObject.songAlbum}
                    </Typography>
                    <CardMedia
                        image={playingObject.songAlbumArt}
                        className={classes.cover}
                        title="image to pull from spotify api"
                    />
                    <div className={classes.xsControls}>
                        <IconButton aria-label="previous" className={classes.skipIcons}>
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next" className={classes.skipIcons}>
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </div>
                </div>
            </Card>
        </Grid>
    );
}