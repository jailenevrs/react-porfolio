import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import "../styles/contact.css"

function Contact(){
    return (<div className= "contactForm">  
       <h1> Contact Me</h1>
       <form >
        <input placeholder="Name"
        type="text"
        />
        <br></br>
        <input placeholder ="email"
        type= "text"
    />
    <br></br>
        <textarea className="message" placeholder = "message" 
        type = "text"
        />        
        <br></br>

      

       <button classname= "Submit"> Submit </button>
       </form>

    </div>)
}

export default Contact;