import React from 'react';
import {Typography, Box, makeStyles} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands,solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used



const useStyles= makeStyles((theme) =>({
    skillSection: {
        "& h1, h2, h3, h4, h5, h6": {
        fontFamily: 'Cambria',
        },
        "& h6":{
            [theme.breakpoints.down('lg')]: {
                fontSize: "1em"
            }
        },
      
    },
    skillIcon:{
       marginRight:"20px" 
    },
    skillTech:{
        marginTop:"50px"
    },
    skillWorkFlow:{
        marginTop:"50px"
    },
    skillCheck:{
        marginRight:"10px",
    }
}))

const Skill = () =>{
   
    const classes = useStyles()
    return(<div>
        <Box className={classes.skillSection} id="skillSection" >
            <Typography
             variant="h2"
             className={classes.skillTitle}>
               Skills
            </Typography>
            <Box>
                <Typography
                variant="h5"
                className={classes.skillTech}
                >
                    {"PROGRAMMING LANGUAGES & TOOLS"}
                </Typography>
                <ul>
                    <FontAwesomeIcon icon={brands("html5")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("css3")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("js")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("bootstrap")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("wordpress")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("python")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("react")} size="3x" className={classes.skillIcon} />
                    <FontAwesomeIcon icon={brands("figma")} size="3x" className={classes.skillIcon} />
                </ul>
            </Box>
            <Box>
               <Typography
                variant="h5"
                className={classes.skillWorkFlow}
              >
                  {"workflow".toUpperCase()}
               </Typography>
               <ul>
                    <Typography variant="h6"> <FontAwesomeIcon icon={solid("check")} className={classes.skillCheck} /> {"Mobile-First, Responsive Design"} </Typography>
                    <Typography variant="h6"> <FontAwesomeIcon icon={solid("check")} className={classes.skillCheck} /> {"Cross Browser Testing & Debugging"} </Typography>
                    <Typography variant="h6"> <FontAwesomeIcon icon={solid("check")} className={classes.skillCheck} /> {"Cross Functional Teams"} </Typography>
                    <Typography variant="h6"> <FontAwesomeIcon icon={solid("check")} className={classes.skillCheck} /> {"Agile Development & Scrum"} </Typography>
               </ul>
            </Box>
        </Box>   
    </div>)
}
export default Skill