import SideBar from "./components/sideBar/sideBar.js"
import About from "./components/about/about.js"
import Experience from "./components/experience/experience.js"
import Education from "./components/education/education.js"
import Skill from "./components/skill/skill.js"
import Interest from "./components/interest/interest.js"
import Certificate from "./components/certificate/certificate.js"
import useWindowDimensions from "./components/windowWidthAndHeight"
import React,{useEffect, useLayoutEffect, useRef, useState} from 'react';


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

 const components=[<About/>,<Experience/>,<Education/>,<Skill/>,<Interest/>,<Certificate/> ]

const App= props => {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerWidth + 30,
        paddingRight: "270px",
      },
      [theme.breakpoints.down('md')]:{
        marginTop:"200px"
      },
      flexGrow: 1,
      padding: theme.spacing(3),

    },
    divider: {
      marginTop: "50px"
    },

  }))
  const targetRef = useRef([]);
  const { height, width } = useWindowDimensions();
  const [dimensions, setDimensions] = useState([]);

  useLayoutEffect(() => {
 
        setDimensions(
          {

          width: targetRef.current.map((tarRef)=>(tarRef.offsetWidth)),
          height: targetRef.current.map((tarRef) => (tarRef.offsetHeight))
        });
  }, []);
  useEffect(() => {
    targetRef.current = targetRef.current.slice(0, components.length);
  }, []);
  useEffect(()=>{
    if (targetRef.current === undefined || dimensions.height=== undefined) {
      
    }
    else {
      for (var i = 0; i < 6; i++) {
        if (height >dimensions.height[i]) {
          const spaceAround =height%dimensions.height[i]
         console.log(targetRef.current[i])
         targetRef.current[i].style.paddingTop=spaceAround/2+"px"
          targetRef.current[i].style.paddingBottom = spaceAround / 2 + "px"
        }
        else{
          const spaceAround=0
        }
      }
    }
  })
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
       {components.map((component, i)=>(
        <div
            key={i}
            ref={el =>targetRef.current[i] = el}
        > {component} 
        </div>))}
      </div>
    </ThemeProvider>
    </div>)}

export default App;
