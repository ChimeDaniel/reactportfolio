import React from 'react';
import {makeStyles, Typography,Box} from "@material-ui/core"


const useStyles= makeStyles((theme)=>({
    educationSection: {
        marginTop: "170px",
        "& h1, h2, h3, h4, h5, h6": {
            fontFamily: 'Cambria',
        },
        display: "flex",
        width: "100%",
        alignItems: "center",
        marginBottom: "200px",
        [theme.breakpoints.only("md")]:{
            marginRight:"-100px"
        }
    },
    educationCourse: {
        marginTop: "30px",
        [theme.breakpoints.only('xl')]: {
            width: "1460px",
        }, [theme.breakpoints.only('lg')]: {
            width: "1000px",
        },[theme.breakpoints.only('md')]: {
            width: "300px",
        },
    },
    educationContent: {
        width: "100%",
        marginTop: "100px"  ,
        [theme.breakpoints.down('sm')]: {
            marginRight: "-200px",
        },
    },
    educationDate: {
        [theme.breakpoints.up('lg')]: {
            margin: "100px -100px 0 -280px ",
            width:"70%"
        },
        [theme.breakpoints.only('md')]: {
            margin: "100px 100px 0 200px ",
            width:"70%"
        },
        width: "70%",
       
        marginTop: "30px"
    },
    containerBox: {
        [theme.breakpoints.down('sm')]: {
            display: "grid",
          
        },
        display: "flex",
        width: "100%"
    },
    school:{
        width: "50%"
    }
}))

const Education = () => {
   
    const classes= useStyles()
    return(
        <div className={classes.educationSection} id="educationSection">
            <div>
            <Typography
            variant="h2"
            >
             EDUCATION
            </Typography>
            <Box  className={classes.containerBox} >
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
                        variant="h6"
                        className={classes.educationCourse}
                        color="textSecondary">
                        {"Computer Science"}

                    </Typography><Typography
                        variant="h6"
                        className={classes.educationGrade}
                        color="textSecondary">
                        {"Second Class Upper Division"}

                    </Typography>

                </Box>
                <Box className={classes.educationDate}>
                    <Typography
                        variant="h6"
                       >
                        {"January 2020 - July 2020"}
                    </Typography>
                </Box>
            </Box>
            <Box  className={classes.containerBox}>
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
                            variant="h6"
                            className={classes.educationCourse}
                            color="textSecondary">
                                {"Computer Science"}
                            
                            </Typography><Typography
                            variant="h6"
                            className={classes.educationGrade}
                            color="textSecondary">
                                {"Second Class Upper Division"}
                            
                            </Typography>

                    </Box>
                    <Box className={classes.educationDate}>
                        <Typography 
                        variant="h6"
                       >
                                {"January 2020 - July 2020"}
                        </Typography>
                    </Box>
                </Box>
        </div>
        </div>)
}

export default Education