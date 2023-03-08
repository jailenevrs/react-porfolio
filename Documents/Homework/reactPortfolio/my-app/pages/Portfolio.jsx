import React from "react";
import Projects from "../components/Projects"
import Weather from "../images/Weather.png"
import Cocktails from "../images/Cocktails.png"
import Fitness from "../images/Fitness.png"
import Password from "../images/Password.png"
import "../styles/projects.css"



function Portfolio(){
    return  <div className= "Portfolio">
        <h1> Projects </h1>
        <div className= "listProject">
        <Projects name = "Weather App"  image ={Weather} />
        <Projects name = "Cloudy with a Chance of Cocktails"  image = {Cocktails} />
        <Projects name = "Fitness Tracker" image = {Fitness} />
        <Projects name = "Password Generator" image = {Password} />
    </div>


    </div>

}

export default Portfolio;