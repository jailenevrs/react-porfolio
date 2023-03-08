import React from "react";
import "../styles/resume.css"

function Resume(){
    return  (
        <div className= "resume">

<a href={require("../images/resume.jpeg")} download="myFile">Download Resume</a>

        </div>
    )
    }

export default Resume;