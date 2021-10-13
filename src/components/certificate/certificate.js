import React from 'react';
import {Box, Typography,makeStyles} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const useStyles = makeStyles((theme)=>({
    certificateSection:{
        "& h1, h2, h3, h4, h5 , h6, p":{
            fontFamily:"Cambria"
        },
        "& h6":{
            [theme.breakpoints.down('lg')]: {
                fontSize: "1em"
            }
        },
        marginTop:"350px",
        marginBottom:"350px"
    },
    certificateTitle:{
        
    },
     certificateIcon: {
        marginRight: "20px",
        color:"gold"
    }
}))

const Certificate = () => {
    
    const classes= useStyles()
    return(
         <div>
            <Box className={classes.certificateSection} id="certificateSection">
               <Typography
               variant="h2"
               className={classes.certificateTitle}
               >
                   {"Awards and Certifications"}
                </Typography> 
                <ul>
                    <Typography variant="h6" ><FontAwesomeIcon icon={solid("award")} className={classes.certificateIcon}></FontAwesomeIcon> {"Local Coordinator - Student For Liberty"}</Typography>
                    <Typography variant="h6" ><FontAwesomeIcon icon={solid("award")} className={classes.certificateIcon}></FontAwesomeIcon> {"Open Source Leader - Common Purpose"}</Typography>
                    <Typography variant="h6" ><FontAwesomeIcon icon={solid("award")} className={classes.certificateIcon}></FontAwesomeIcon> {"Google Digital Skills For Africa - Haptics Nigeria"}</Typography>
                    <Typography variant="h6" ><FontAwesomeIcon icon={solid("award")} className={classes.certificateIcon}></FontAwesomeIcon> {"Campus Director - Hult Prize Foundation "}</Typography>
                </ul>
            </Box>
        </div>
    )
}
export default Certificate