import { React } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.special,
    maxWidth: '100%',
  },
  details: {
    display: 'flex',
    margin: theme.spacing(1),
    flexDirection: 'column',
  },
  songTitle: {
    fontSize: 20,
  },
  cover: {
    height: 200,
    width: 200,
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
<<<<<<< HEAD

const spotify = new SpotifyWebApi();
=======
>>>>>>> 1ff89dcfba9dc179159da9906b05bf246eda67a1

export default function MusicCard({tracks}) {
  const classes = useStyles();
  const theme = useTheme();

<<<<<<< HEAD
    //run code based on given condition
    useEffect(() => {
        spotify.getMyTopTracks().then(topTracks => {
          setTracks(topTracks.items)
          console.log(topTracks)
      })

  
    }, []);
=======

>>>>>>> 1ff89dcfba9dc179159da9906b05bf246eda67a1

  const trackCard = tracks.map(track => {
  return (
    <Grid item key={track.id}>
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.songTitle}>
            {track.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {track.artists[0].name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {track.album.name}
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
        image={track.album.images[0].url}
        title="image to pull from spotify api"
      />
    </Card>
    </Grid>
  )}
  );
  return (
    <Grid container direction="row" justify="center" spacing={3}>
      {trackCard}
    </Grid>
  );
}