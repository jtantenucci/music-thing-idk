import { React } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    height: 175,
    width: 240,
    display: 'flex',
    flexDirection: 'column',
  },
  songTitle: {
    fontSize: 19,
    textShadow: "0.5px 0.5px 5px #AACDA2",
    flexShrink: 0,
  },
  songTitle2: {
    fontSize: 16,
    textShadow: "0.5px 0.5px 5px #AACDA2",
    flexShrink: 0,
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
  xsControls: {
    display: 'flex',
    justifyContent: 'space-evenly',
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
}));

export default function MusicCard({ tracks, contentOpen }) {
  const classes = useStyles();
  const theme = useTheme();
  const cardAlignment = useMediaQuery(theme.breakpoints.up('sm'));

  const newTracks = tracks.slice(3, tracks.length - 1);
  const trackCard = newTracks.map(track => {
  return (
    <Grid item key={track.id}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={track.name.length < 24 ? classes.songTitle : classes.songTitle2}>
              {track.name}
            </Typography>
            <Typography color="textSecondary" className={classes.songArtist}>
              {track.artists[0].name}
            </Typography>
            <Typography color="textSecondary" className={classes.songAlbum}>
              {track.album.name}
            </Typography>
          </CardContent>
          <Divider className={classes.div}/>
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

  const mobileTrackCard = newTracks.map(track => {
    return (
      <Grid item key={track.id}>
      <Card className={classes.root}>
        <div className={classes.xsCard}>
          <CardHeader
          title={track.name}
          subheader={track.artists[0].name}
          className={classes.cardHeader}
          >
          </CardHeader>
          <CardMedia
            className={classes.cover}
            image={track.album.images[0].url}
            title="image to pull from spotify api"
          />
          <div className={classes.xsControls}>
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
      </Card>
    </Grid>
    )}
  );

  return (
    cardAlignment ? 
      <Grid container direction="row" justify={contentOpen ? "center" : "flex start"} spacing={1}>
        {trackCard}
      </Grid>
      :
      <Grid container direction="row" justify="center" spacing={1}>
        {mobileTrackCard}
      </Grid>
  );
}