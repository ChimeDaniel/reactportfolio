import {React, useCallback, useState} from 'react';
import {makeStyles, Box,Typography, Link } from "@material-ui/core"
import {GitHub, LinkedIn, Twitter, Facebook, Instagram} from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
  aboutSection:{
    display:"flex",
    alignItems:"center",
    maxWidth:"100%"
  },
  name: {
      "& h1":{
        fontFamily: 'Cambria',
    }
  },
  address: {
      "& h6 ":{
        fontFamily: 'Verdana',
        display:"inline",
    }
  },
  aboutContent:{
        "& p ":{
          fontFamily: 'Verdana',
        },
        whiteSpace: 'pre-line',
        wordWrap:"break-word",
        marginTop:"50px"

  },
  socialIcon:{
     width: '1.5rem',
     height: '1.5rem',
     color:"white",

  },
  socialIcons:{
   marginTop:"50px"
  },
  socialBox:{
     marginRight:"20px"
  }


}))



const About = () => {
    const [aboutPadding, setAboutPadding] = useState(0)
    const [aboutHeight, setAboutHeight] = useState()
    const classes = useStyles();
    const defaultProps = {
    m: 1,
    style: {
      width: '4rem', 
      height: '4rem',
      display:"flex", 
      alignItems:"center" },
    }

    const aboutSectionRef = useCallback(node => {
      if (node !== null) {
        setAboutHeight(node.getBoundingClientRect().height);
        if(window.innerHeight>aboutHeight){
            setAboutPadding((window.innerHeight-aboutHeight)/2)
        }
      }
    }, [aboutHeight]);

   return(
        <div className={classes.aboutSection} id="aboutSection" ref={aboutSectionRef} style={{paddingTop:aboutPadding, paddingBottom:aboutPadding}}>
          <div className={classes.name}>
            <div>
              <Typography 
              variant="h1"
              color="textPrimary"
              >
              {"Joseph".toUpperCase()} 
              </Typography>
              <Typography 
              variant="h1"
              color="textSecondary"
              >
                {" Enoch".toUpperCase()}
              </Typography>
          </div>
          <div className={classes.address}>
              <Typography 
                variant="h6"
                color="textSecondary"
              >
                {"Anchor University·".toUpperCase() }
              </Typography>
              <Typography 
                variant="h6"
                color="textSecondary"
              >
                {"(+234) 708 9583 771·"  }
              </Typography>
              <Typography 
                variant="h6">
                  <Link href="mailto:enochjoseph01@gmail.com"
                  color="textPrimary">
                    {"enochjoseph01@gmail.com".toUpperCase()}
                  </Link>
              </Typography>
          </div>
          <div className={classes.aboutContent}>
            <Typography 
              variant="body1"
              >
                {"Joseph is currently a computer science undergraduate at Anchor University, where he's a leading student researcher in Artificial Intelligence. He is also a member of the Anchor University Laboratory for Interdisciplinary Statistical Science and Data Analysis (AU-LISSDA) In March 2020, he started an internship with HiiT Plc and thus far, he has acquired various soft skills.\n\nIn January 2020, Joseph was selected as a member of the Young Anchor Students Initiative, a group of elite students in Anchor University, founded by the Vice-Chancellor of the university. In February 2020, he founded the first student club in Anchor University (Intlea). He was also accepted by Growth Plan, to be the Institution's Ambassador in Anchor University. He is cureently the Campus Director of the Hult Prize AUL."}
              </Typography>
          </div>
          
          <div  className={classes.socialIcons}>
             <Box display="flex" justifyContent="left">
               <Box borderRadius="50%" {...defaultProps} bgcolor="primary.main" justifyContent="center" display="flex" className={classes.socialBox}>
                <Link href="https://www.linkedin.com/in/joseph-enoch" target="_blank"><LinkedIn className={classes.socialIcon}/></Link>
               </Box>
               <Box borderRadius="50%" {...defaultProps} bgcolor="primary.main" justifyContent="center" display="flex" className={classes.socialBox}>
                <Link href="https://github.com/Josephenoch" target="_blank"><GitHub className={classes.socialIcon}/></Link>
               </Box>
               <Box borderRadius="50%" {...defaultProps} bgcolor="primary.main" justifyContent="center" display="flex" className={classes.socialBox}>
                <Link href="https://twitter.com/EnochJoseph01" target="_blank"><Twitter className={classes.socialIcon}/></Link>
               </Box>
               <Box borderRadius="50%" {...defaultProps} bgcolor="primary.main" justifyContent="center" display="flex" className={classes.socialBox}>
                <Link href="https://web.facebook.com/Kingjoeenoch/" target="_blank"><Facebook className={classes.socialIcon}/></Link>
               </Box>
               <Box borderRadius="50%" {...defaultProps} bgcolor="primary.main" justifyContent="center" display="flex" className={classes.socialBox}>
                <Link href="https://www.instagram.com/j.oenoch/" target="_blank"><Instagram className={classes.socialIcon}/></Link>
               </Box>
             </Box>
          </div>
        </div>
    </div>
   )
   }

export default About