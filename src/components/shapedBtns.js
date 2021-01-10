import React from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';
import './shapedBtns.css';
import man from '../images/man1.PNG';


function ShapedBtns() {
    
    return (
        <div class="shapedBtns-contianer">
            <div class="btn-m-container">
                <Link className="linkm-text" to="/management">
                    MANAGEMENT
                </Link>
            </div>
            <div class="btn-t-container">
                <Link className="linkt-text" to="/technician">
                    TECHNICIANS
                </Link>
            </div>
            <div class="register-container">
                <span class="register-text">REGISTER</span>
            </div>
            <div class="image-container">
                <img src={man} alt="man-logo" class="image-man" />
            </div>
        </div>
        
        
    );
}

export default ShapedBtns;