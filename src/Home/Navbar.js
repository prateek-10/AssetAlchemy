import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return(
        <div className="container">
            <div className="box">
                <div><img src="newlogo1.png" alt="" className='logo'/></div>
                <div className="header">
                    
                    <a href="#">About Us</a>
                    <a href="">Features</a>
                    <a href="#">Contact Us</a>
                    <button>Logout</button>
                      
                </div>
            </div>
            

        </div>
    );
}
export default Navbar;