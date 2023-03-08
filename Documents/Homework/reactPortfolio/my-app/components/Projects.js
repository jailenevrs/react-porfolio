import React from 'react';

function Projects ({name, image}){
    return (
        <div className="aProject">
            <div style ={{backgroundImage: `url(${image})`}}className= "Theimage" />
           <h1>{name}</h1> 
         </div>

    )
}

export default Projects;