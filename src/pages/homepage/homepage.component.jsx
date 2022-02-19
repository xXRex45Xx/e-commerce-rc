import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

import './homepage.styles.scss'

const HomePage = () => {
    return(
    
    <div className="homepage">
        <Link to={'/'}>Home Page</Link>
        <Link to={'/hats'}>Hats Page</Link>
        <Link to={'/aboutus'}>About Us</Link>
       <Directory router={{navigate: useNavigate()}} />
    </div>
)}

export default HomePage