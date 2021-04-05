import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.palette.primary.special,
        maxWidth: '100%',
    },
    player: {
        border: '2px solid #9CE79C',
        width: 250,
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
    div: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        marginLeft: 12,
        marginRight: 12,
    },
    content: {
        paddingTop: 12,
        paddingBottom: 0,
        paddingRight: 0,
        flex: '1 0 auto',
    },

}));

export default function NowPlaying({ webPlayerTitle, webPlayerAlbumArt, webPlayerButtons }) {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.root}>
                <div className={classes.player}>
                { webPlayerTitle }
                { webPlayerAlbumArt }
                    <div className={classes.xsControls}>
                        { webPlayerButtons }
                    </div>
                </div>
            </Card>
        </Grid>
    );
}