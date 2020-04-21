import React from 'react'
import style from './Nav.module.css'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import cx from 'classnames'; 

function Nav() {
    return (
        <div className={cx("container-fluid bg-dark text-light", style.cfluid)}>
            <div className={cx("container", style.container)}>
                <div className={cx("dropdown", style.language)}>
                    <div className="dropdown">
                        <button className={cx("dropdown-toggle", style.dropdownToggle)} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Languages
                        </button>
                        <div className={cx("dropdown-menu", style.currencyList)} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="http://www.google.com">English</a>
                            <a className="dropdown-item" href="http://www.google.com">Malay</a>
                            <a className="dropdown-item" href="http://www.google.com">Persian</a>
                        </div>
                    </div>
                </div>

                <div className="currencies">
                    <div className="dropdown">
                        <button className={cx("dropdown-toggle", style.dropdownToggle)} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Currency
                        </button>
                        <div className={cx("dropdown-menu", style.currencyList)} aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="http://www.google.com">USD</a>
                            <a className="dropdown-item" href="http://www.google.com">MYR</a>
                            <a className="dropdown-item" href="http://www.google.com">SGD</a>
                        </div>
                    </div>
                </div>
 
                <div className={style.profiles}>
                    +60215487222
                </div>

                <div className={style.profiles}>
                    <a href="http://www.google.com" className="dealer">Dealer Profile</a> | <a href="http://www.google.com" className="seller">Seller Profile</a>
                </div>
                
                <div className="social-links">
                    <SocialMediaIcons theStyle={{fontSize:'12pt', padding: '0 8px'}}/>
                </div>

                <div className={cx(style.loginRegister)}>
                    <i className={cx('fa fa-user', style.fauser)}></i><a href="http://www.google.com" className={cx(style.login)}>Login</a> | <a href="http://www.google.com" className="register">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
