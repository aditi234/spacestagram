import React,{useEffect, useState} from "react";
import './../css/apod.css'

export default function APOD(){
    const [pod, setPod] = useState("");
    useEffect(() => {
        fetch(
            "https://api.nasa.gov/planetary/apod?api_key=EJarYMhAVfydNBX3pAD6lCaxC3aVdf0dvB9cie5y"
        )
            .then((response) => response.json())
            .then((data) => setPod(data))
            .catch((err) => console.error(err));
    }, []);
    return(
        <>
           <h1>Picture of the day</h1> 
           <div className="card">
               <div className="card_body">
                   <img src={pod.url} alt={pod.title} />
                   <h2>{pod.title}</h2>
                   <p>{pod.explanation}</p>
               </div>
           </div>
        </>
    );
}