
import React from 'react';

import {AppBar, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box} from '@material-ui/core';

import image from "../../assets/cropped.png";

import {Info, School, VerifiedUser, DeveloperMode, Favorite, Work, Menu} from '@material-ui/icons';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as Scroll} from 'react-scroll'



const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    display: "none",
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      width: drawerWidth+"px",
      flexShrink: 0,
    },
  },
  appBar: {
    background:"#292b2c",
    justifyContent:"center",
    [theme.breakpoints.up('lg')]: {
      display:"none", 
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
  ,
  drawerPaper: {
    width: drawerWidth,
    background:"#292b2c",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list:{
    paddingTop:theme.spacing(4),
    width:"100%",
    
  },
  listItem:{
    paddingLeft:theme.spacing(4),
    width:"100%"
  },
  circleBox:{
    marginTop:"50%",
    backgroundImage: `url(${image})`,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
  }
}));

const SideBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const text = {
    color: "#FFF",
    fontSize: "1em",
   "@media (maxWidth: 1199px) and(minWidth: 900px)":{
      fontSize:"4em"
    }
  }
  ;
  const Icon={
    color: "#FFF",
    fontSize: "1em",
    marginLeft: "10%"
  };
  const defaultProps = {
  borderColor: '#999',
  width:"170px",
  height:"170px",
  border: 7,
  borderRadius:"50%",
};



 const drawer = (
    <div>
      <div className={classes.toolbar}  />
        <Box display="flex" justifyContent="center">
       <Box {...defaultProps} className={classes.circleBox}></Box>
        </Box>
        <List className={classes.list} >
          <Scroll to="aboutSection" smooth={true}>
            <ListItem button key="About" className={classes.listItem}>
              <ListItemIcon style={Icon}> <Info/></ListItemIcon>
              <ListItemText  primaryTypographyProps={{ style: text }} primary="About" />
            </ListItem>
          </Scroll>
          <Scroll to="experienceSection" smooth={true}>
            <ListItem button key="Experience" className={classes.listItem}>
              <ListItemIcon style={Icon}> <Work/></ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: text }} primary="Experience" />
            </ListItem>
          </Scroll>
          <Scroll to="educationSection" smooth={true}>
            <ListItem button key="Education" className={classes.listItem}>
              <ListItemIcon style={Icon}> <School/></ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: text }} primary="Education" />
            </ListItem>
          </Scroll>
          <Scroll to="skillSection" smooth={true}>
            <ListItem button key="Skills" className={classes.listItem}>
              <ListItemIcon style={Icon}> <DeveloperMode/></ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: text }} primary="Skills" />
            </ListItem>
          </Scroll>
          <Scroll to="interestSection" smooth={true}> 
            <ListItem button key="Interests" className={classes.listItem}>
              <ListItemIcon style={Icon}> <Favorite/></ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: text }} primary="Interests" />
            </ListItem>
          </Scroll>
          <Scroll to="certificateSection" smooth={true}>
            <ListItem button key="Ceritificates" className={classes.listItem}>
              <ListItemIcon style={Icon}> <VerifiedUser/></ListItemIcon>
              <ListItemText primaryTypographyProps={{ style: text }} primary="Ceritificates" />
            </ListItem>
            </Scroll>
        </List>
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Joseph's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
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
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}

export default SideBar;

