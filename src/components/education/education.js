import {React, useState, useCallback} from 'react';
import {makeStyles, Typography,Box} from "@material-ui/core"


const useStyles= makeStyles((theme)=>({
    educationSection: {
        "& h1, h2, h3, h4, h5, h6, p": {
            fontFamily: 'Cambria',    
        },
        alignItems:"center",
        width: "100%",
        marginBottom: "200px",
    },
    containerBox: {
        display: "flex",
        width: "100%",
    },
    educationCourse: {
        marginTop: "30px",
    },
    schoolAndDate: {
        width: "100%",
        display:"flex",
    },
    educationDate: {
        width: "25",
    }, 
    school:{
        width: "75%",
        textAlign:"left",
    },
     
}))

const Education = () => {
    const [educationPadding, setEducationPadding] = useState()
    const [educationHeight, setEducationHeight] = useState()
    const educationSectionRef = useCallback(node => {
        if (node !== null) {
          setEducationHeight(node.getBoundingClientRect().height);
          if(window.innerHeight>educationHeight){
              setEducationPadding((window.innerHeight-educationHeight)/2)
          }
        }
      }, [educationHeight]);
   
    const classes= useStyles()
    return(
        <div className={classes.educationSection} id="educationSection" ref={educationSectionRef} style={{paddingTop:educationPadding, paddingBottom:educationPadding}}>
            <Typography
            variant="h2"
            style={{
                marginBottom:"50px"
            }}
            >
             EDUCATION
            </Typography>
            
            <Box  className={classes.containerBox}>
                <Box>
                    <Box className={classes.schoolAndDate}>
                        <Typography 
                        variant="h4"
                        className={classes.schoOl}
                        color="textPrimary">
                            {"ANCHOR UNIVERSITY LAGOS".toUpperCase()}
                        </Typography>
                        <Typography 
                        variant="body1"
                        className={classes.educationDate}
                        >
                            {"January 2020 - July 2020"}
                        </Typography>
                    </Box>
                    <Typography
                    variant="h5"
                    className={classes.degree}
                    color="textSecondary">
                        {"BACHELOR OF SCIENCE".toUpperCase()}
                    </Typography>
                    <Typography
                    variant="body1"
                    className={classes.educationCourse}
                    color="textSecondary">
                        {"Computer Science"}
                    
                    </Typography><Typography
                    variant="body1"
                    className={classes.educationGrade}
                    color="textSecondary">
                        {"Second Class Upper Division"}
                    
                    </Typography>
                </Box>
            </Box>
            {/* <Box  className={classes.containerBox} >
                <Box className={classes.educationContent}>
                    <Typography
                        variant="h4"
                        className={classes.schoOl}
                        color="textPrimary">
                            {"ANCHOR UNIVERSITY LAGOS".toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h5"
                        className={classes.degree}
                        color="textSecondary">
                        {"BACHELOR OF SCIENCE".toUpperCase()}
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.educationCourse}
                        color="textSecondary">
                        {"Computer Science"}

                    </Typography><Typography
                        variant="body1"
                        className={classes.educationGrade}
                        color="textSecondary">
                        {"Second Class Upper Division"}

                    </Typography>

                </Box> 
                <Box className={classes.educationDate}>
                    <Typography
                        variant="body1"
                       >
                        {"January 2020 - July 2020"}
                    </Typography>
                </Box>
            </Box>*/}
        </div>)
}

export default Education