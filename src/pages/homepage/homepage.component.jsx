import React from "react";
import { useNavigate } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

import './homepage.styles.scss'

const HomePage = () => {
    return(
    
    <div className="homepage">
       <Directory router={{navigate: useNavigate()}} />
    </div>
)}

export default HomePage