import React from "react";
import './../css/navbar.css';
import { FaUserAstronaut } from 'react-icons/fa';

export default function Navbar(){
    return(
        <div>
            <>
                <div className='navbar'>
                    <div className="nav">
                        <h2>Spacestagram</h2>
                        <FaUserAstronaut size='40px' />
                    </div>
                    
                </div>
            </>
        </div>
    );
}