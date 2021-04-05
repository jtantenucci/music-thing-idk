import { React } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
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

export default function MobileControls() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <IconButton aria-label="previous" className={classes.skipIcons}>
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
                <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next" className={classes.skipIcons}>
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
        </>
    );
}