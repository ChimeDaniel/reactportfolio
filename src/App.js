import SideBar from "./components/sideBar/sideBar.js"
import About from "./components/about/about.js"
import Experience from "./components/experience/experience.js"
import Education from "./components/education/education.js"
import Skill from "./components/skill/skill.js"
import Interest from "./components/interest/interest.js"
import Certificate from "./components/certificate/certificate.js"
import React,{useEffect} from 'react';


import { makeStyles, ThemeProvider, createTheme} from "@material-ui/core/styles";
import WebFont from 'webfontloader';


const themes = createTheme({
    palette: {
        primary:{
            main: "#292b2c  ",
        },

    },
    typography:{
      h1:{
      fontSize:100,       
      display:"inline",
      }
    },
    
    
})

const drawerWidth = 270;


const App = ()  => {
  const useStyles = makeStyles((theme) => ({
    content: {
      // marginTop:"10vh",
      textAlign:"justify",
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerWidth + 30,
        paddingRight: "200px",
      },
      flexGrow: 1,
      padding: theme.spacing(3),

    },
    divider: {
      marginTop: "50px"
    },

  }))
 
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Serif','Sans-Serif', 'Cambria', 'Chilanka','Didot',]
        }
      }); 
    }, 
    []);
  const classes = useStyles();
  return (
  <div>
    <ThemeProvider theme={themes}>
      <SideBar/>
      <div className={classes.content}>
        <About/>
        <Experience/>
        <Education/>
        <Skill/>
        <Interest/>
        <Certificate/>
      </div>
    </ThemeProvider>
    </div>)}

export default App;
