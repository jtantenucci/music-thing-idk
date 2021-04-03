import React from 'react';
import { makeStyles, Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 275,
        backgroundColor: theme.palette.primary.dark,
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
        textAlign: 'center',
    },
}))

export default function Profile({ token, user }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.pageHead}>
                welcome to {user.profile_name}'s account :)
            </Typography>
        </div>
    );
}