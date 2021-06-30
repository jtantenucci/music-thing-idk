import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    cover: {
        [theme.breakpoints.down('xs')]: {
            height: 200,
            width: 200,
        },
        flexShrink: 0,
        height: 175,
        width: 175,
    },
}));

export default function UserProfilePicture({ image }) {
    const classes = useStyles();
    return (
        <>
            <CardMedia
                className={classes.cover}
                image={image}
                title="image to pull from spotify api"
            />
        </>
    );
}