import { React, useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SpotifyWebApi from 'spotify-web-api-js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.special,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
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
    height: 38,
    width: 38,
  },
}));
const spotify = new SpotifyWebApi();

export default function MusicCard() {
    const classes = useStyles();
    const theme = useTheme();
    const [artistName, setArtistName] = useState(null);
    const [trackName, setTrackName] = useState(null);


    useEffect(() => {
          spotify.getMyTopTracks().then(topTracks => {
            setTrackName(topTracks.items[5].name)
            setArtistName(topTracks.items[5].artists[0].name)
        })
      
    }, []);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {trackName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artistName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous" className={classes.skipIcons}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next"  className={classes.skipIcons}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image=""
        title="image to pull from spotify api"
      />
    </Card>
  );
}