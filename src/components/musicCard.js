import { React } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MusicCardTitle from '../pieces/musicCardTitle';
import MusicCardControls from '../pieces/musicCardControls';
import MusicCardAlbumArt from '../pieces/musicCardAlbumArt';
import MobileTitle from '../pieces/mobileTitle';
import MobileControls from '../pieces/mobileControls';
import MobileAlbumArt from '../pieces/mobileAlbumArt';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
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
    alignItems: 'start',
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
    fontSize: 19,
    textShadow: "0.5px 0.5px 5px #AACDA2",

  },
  songTitle2: {
    fontSize: 16,
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
              <MusicCardTitle name={track.name} artist={track.artists[0].name} album={track.album.name} />
            </CardContent>
            <Divider className={classes.div} />
            <div className={classes.controls}>
              <MusicCardControls />
            </div>
          </div>
          <MusicCardAlbumArt image={track.album.images[0].url} />
        </Card>
      </Grid>
    )
  });

  const mobileTrackCard = newTracks.map(track => {
    return (
      <Grid item key={track.id}>
        <Card className={classes.root}>
          <div className={classes.xsCard}>
            <MobileTitle title={track.name} artist={track.artists[0].name} />
            <MobileAlbumArt image={track.album.images[0].url} />
            <div className={classes.xsControls}>
              <MobileControls />
            </div>
          </div>
        </Card>
      </Grid>
    )
  });

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