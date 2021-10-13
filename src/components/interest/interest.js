import React from 'react';
import {Typography, Box,makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
    interestSection: {
        marginTop: "350px",
        marginBottom: "350px",
        "& h1, h2, h3, h4, h5, h6, p": {
        fontFamily: 'Cambria',
        },},
    interestContent: {
        fontSize: "1.3em",
        whiteSpace: 'pre-line',
        wordWrap: "break-word",
        marginTop: "50px"

    }
}))

const Interest = () =>{
        const classes=useStyles() 
        return(<div>
            <Box className={classes.interestSection} id="interestSection" >
               <Typography
                variant="h2"
                className={classes.interestTitle}
                >
                    {"Interest"}
                </Typography>
                <Typography
                 variant="body1"
                 className={classes.interestContent}>
                    {"Apart from being a web developer and AI researcher, Joseph enjoys most of his time being outdoors, playing table tennis or interacting with people. He also enjoys his alone time, reminiscing over events and oppurtunities.Joseph is an animal lover. Over the past three years, he has trained 5 cats and 2 dogs. He enjoys his time discussing abstract and unreal topics as way to pass time."}
                </Typography> 
            </Box>
        </div>)
}
export default Interest