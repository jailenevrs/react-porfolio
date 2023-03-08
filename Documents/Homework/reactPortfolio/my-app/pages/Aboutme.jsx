import React from "react";
import "../styles/Aboutme.css";
import avi from "../images/avi.jpeg";

function Aboutme(){
    return ( <div className="prompt"> 
        <h2 className= 'aboutme'>  </h2>
        <p> Recieved a certificate of completion from the University of Miami in Fullstack Development</p>
         <h2 ClassName="Skills">Skills</h2>
            <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              <li>React</li>  
              <li>NPM</li>  
               <li>MongoDB</li> 
               <li>SQL</li> 
          <li>Bootstrap</li>

          <img className="portrait" src={avi} alt= "" />
      
     </div>

    )
}

export default Aboutme;