import React from 'react'
import style from './Nav.module.css'

import cx from 'classnames'; 

function Nav() {
    return (
        <div className="container-fluid bg-dark text-light">
            <div className={cx("container", style.container)}>
                <div className={cx("dropdown", style.language)}>
                    language
                </div>

                <div className="currencies">
                    USD
                </div>
 
                <div className="contact">
                    +60215487222
                </div>

                <div className="profiles">
                    <span className="dealer">Dealer Profile</span> | <span className="seller">Seller Profile</span>
                </div>

                <div className="social-links">
                    <a href="http://www.google.com"><i className="fa fa-facebook-square"></i></a>
                    <a href="http://www.google.com"><i className="fa fa-twitter"></i></a>
                    <a href="http://www.google.com"><i className="fa fa-instagram"></i></a>
                    <a href="http://www.google.com"><i className="fa fa-linkedin"></i></a>
                    <a href="http://www.google.com"><i className="fa fa-google-plus"></i></a>
                    <a href="http://www.google.com"><i className="fa fa-youtube"></i></a>
                </div>

                <div className="login-register">
                    <a href="http://www.google.com" className="login">Login</a> | <a href="http://www.google.com" className="register">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
