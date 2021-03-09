import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@mdi/react';
import { mdiSpotify, mdiGithub, mdiTwitter, mdiMusic } from '@mdi/js';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.dark,
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <List className={classes.listItem}>
          {['brain', 'brain', 'brain', 'brain'].map((text, index) => (
            <ListItem button key={index}>
                
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List alignItems="center" className={classes.listItem}>
          {[{mdiSpotify}, {mdiTwitter}, {mdiGithub}, {mdiMusic}].map((text, index) => (
            <ListItem Icon key={index}>
                <Icon path={text} size={1} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}