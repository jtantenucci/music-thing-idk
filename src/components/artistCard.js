import { React } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MusicCardAlbumArt from '../pieces/musicCardAlbumArt';
import Card from '@material-ui/core/Card';
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
  image: {
    borderRadius: 50,
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
  div: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    marginLeft: 12,
    marginRight: 12,
  },
  artistName: {
    fontSize: 19,
    textShadow: "0.5px 0.5px 5px #AACDA2",
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

export default function ArtistCard({ topArtists, contentOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const topSixArtists = topArtists.slice(0, 6);

  const artistCard = topSixArtists.map(artist => {
    return (
      <Grid item key={artist.id}>
        <Card className={classes.root}>
            <Typography variant='p' className={classes.artistName}>
                {artist.name}
            </Typography>
            <Divider className={classes.div}></Divider>
        <MusicCardAlbumArt image={artist.images[0].url} className={classes.image} />
        </Card>
      </Grid>
    )
  });

  return (
      <Grid container direction="row" justify={"center"} spacing={1}>
        {artistCard}
      </Grid>
  );
}