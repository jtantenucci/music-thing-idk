import { React, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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

export default function MenuDrawer({ props }) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.listItem}>
          {['brain', 'brain', 'brain', 'brain'].map((text, index) => (
            <ListItem button key={index}>
                
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          className={classes.drawer}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
                keepMounted: true,
          }}
          anchor="right"
        >
        {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            anchor="right"
          >
            {drawer}
          </Drawer>
        </Hidden>
    </div>
  );
}