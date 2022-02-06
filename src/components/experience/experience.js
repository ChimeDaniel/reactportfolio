import {React, useState, useCallback} from 'react';
import {Typography, makeStyles, Box} from "@material-ui/core"


const useStyles= makeStyles((theme)=>({
    experienceSection:{
        marginTop:"170px",
        "& h1, h2, h3, h4, h5, h6":{
        fontFamily: 'Cambria',},
        "& h6":{
            fontSize:"1.3em"
        },
        display:"flex",
        width:"100%",
        alignItems:"center",
        marginBottom:"200px"
    },
    experienceText:{
     marginTop:"30px",
     [theme.breakpoints.only('xl')]: {
               width:"1460px",
         },
      },
     experienceContent:{
         width:"100%",
         marginTop:"100px",
         [theme.breakpoints.down('lg')]: {            
         marginRight:"-200px",
         },
     },
     experienceDate:{
         [theme.breakpoints.only('xl')]: {
               margin:"100px -100px 0 -280px ",
               width: "200px"
         },
         [theme.breakpoints.only('lg')]: {
             margin: "100px -100px 0 -80px ",
             width: "200px"
         },
         marginTop:"30px"
     },
     containerBox:{
         [theme.breakpoints.down('md')]: {
             display:"grid"
        },
        display:"flex",
        width: "100%"
     },
     experienceRole:{
         width:"50%"
     }

}))

const Experience = () => {
    const [experiencePadding, setExperiencePadding] = useState()
    const [experienceHeight, setExperienceHeight] = useState()
    const experienceSectionRef = useCallback(node => {
        if (node !== null) {
          setExperienceHeight(node.getBoundingClientRect().height);
          if(window.innerHeight>experienceHeight){
              setExperiencePadding((window.innerHeight-experienceHeight)/2)
          }
        }
      }, [experienceHeight]);
   
        const classes= useStyles()
        return (
        <div className={classes.experienceSection} id="experienceSection" ref={experienceSectionRef} style={{paddingTop:experiencePadding, paddingBottom:experiencePadding}}>
            <div>
            <Typography
            variant="h2"
            >
                EXPERIENCE
            </Typography>
            <Box  className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"founder and adviser".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"ANCHOR INTLEA COMMUNITY".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"Founder and current adviser of Anchor Intlea Community or Intlea for short. Intlea is a student group in Anchor University Lagos made up of 14 pragmatic problem solvers dedicated to making a lasting impact in the world. The goal of the group is to ensure that real-world problems are tackled as soon as they are discovered. This goes on through a process of discussion, deliberation, solution pitching, solution analysis and implementation. The team is now being lead by a perspicacious individual."}
                        
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}>
                            {"January 2020 - Present"}
                    </Typography>
                </Box>
            </Box>
            <Box   className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"pro".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"au-lissda".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"Member of the Executives and PRO in AU-LISSDA (Anchor University Laboratory for Inter-Disciplinary Statistical Study and Analysis). As the PRO, Joseph was tasked with the duty of drafting a constitution which was vetted by the President and Vice."}
                        
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}>
                            {"January 2020 - July 2020"}
                    </Typography>
                </Box>
            </Box>
            <Box   className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"member".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"yasi".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"The YASI club is a club founded by the Vice-Chancelor of Anchor University. The major goal of this club is develop students into problem solvers. Thus far, the club has tackled environmental problems."}
                        
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}>
                            {"February 2020 - Present"}
                    </Typography>
                </Box>
            </Box>
             <Box   className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"intern".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"hiit plc.".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"HiiT Plc. is arguably one of the best IT training companies in Nigeria. As an Intern, Joseph doubled as a student and on a few occasions, an instructor."}
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}>
                            {"February 2020 - Present"}
                    </Typography>
                </Box>
            </Box>
            <Box   className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"local coordinator/campus director".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"student for liberty".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"Student For Liberty, SFL for short is the largest network of students around the globe. As the name implies, the Student For Liberty foundation is an institution that helps the fight for Liberty by orientating the youths/students on the roles they need to play to attain the said Liberty."}
                        
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}>
                            {"June 2020 - Present"}
                    </Typography>
                </Box>
            </Box>
            <Box   className={classes.containerBox}>
                <Box className={classes.experienceContent}>
                        <Typography 
                        variant="h4"
                        className={classes.experienceRole}
                        color="textPrimary">
                            {"campus director".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h5"
                        className={classes.experienceOrg}
                        color="textSecondary">
                            {"the hult prize aul 2020/2021".toUpperCase()}
                        </Typography>
                        <Typography
                        variant="h6"
                        className={classes.experienceText}
                        color="textSecondary">
                            {"The Hult Prize came to Anchor University Lagos for the first time in 2020 with Joseph Enoch playing the role of the Campus Director for that session. The Hult Prize is a business case competition, where participants come together as a team of three or four individuals and work together in making a profitable business from an annually given theme (societal problem). As the Campus Director, Joseph Enoch alongside the organizing team was expected to organize a successful Oncampus event which comprised of various other mini-events."}
                        
                        </Typography>
                </Box>
                <Box>
                    <Typography 
                    variant="h6"
                    className={classes.experienceDate}
                    >
                            {"July 2020 - Present"}
                    </Typography>
                </Box>
            </Box>             

        </div>
        </div>

        )
    }
export default Experience