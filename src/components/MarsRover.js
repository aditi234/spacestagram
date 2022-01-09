import React, {useEffect, useState} from "react";
import './../css/marsrover.css';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';

export default function MarsRover(){
    const [pics, setPics] = useState([]);
    const [updatePic, setUpdate]=useState([]);

    useEffect(() => {
        fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=EJarYMhAVfydNBX3pAD6lCaxC3aVdf0dvB9cie5y"
        )
          .then((response) => response.json())
          .then((data) => setPics(data.photos))
          .catch((err) => console.error(err));
        
        Object.keys(pics).forEach(v=>{
            setUpdate((updatePic)=>[...updatePic,{...pics[v], like:false}]);
        });
        console.log(updatePic);
    },[]);
    const funcLike=(e)=>{
        let newObj=[...updatePic];
        let index=newObj.findIndex(el=>el.id===e);
        console.log(newObj[index].like);
        newObj[index].like=!newObj[index].like;
        setUpdate(newObj);        
    }
    return(
        <>
            <h1>Mars Rover Photos</h1>
            <div className="pics">
                {updatePic.map((item) => {
                    return (
                    <div className="outer">
                        <div className="box1">
                                <img src={item.img_src} alt={item.name}/>
                                <h4>Date: {item.earth_date}</h4>
                                <h4>Camera: {item.camera.full_name}</h4>
                                {item.like? <AiFillHeart size='40px' color='red' onClick={()=>funcLike(item.id)}/> : <AiOutlineHeart size="40px" color='white' onClick={()=>funcLike(item.id)}/>}
                        </div>
                        
                    </div>
                    );
                })}
            </div>
            
        </>
    );
}