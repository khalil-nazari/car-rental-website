import React from 'react'
import style from './Navbar.module.css'
import cx from 'classnames'

function Navbar() {
    return (
        <div className="container-fluid">
            <div className={cx("container",style.navContainer)}>
                <nav className={cx("navbar navbar-expand-lg navbar-dark", style.navbar)}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="#">Home</a>
                            </li>

                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="#">Inventory</a>
                            </li>

                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="#">‌Blog</a>
                            </li>
                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="#">Deals</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li><a className={cx("nav-link", style.navLink)} href="#"><i className="fa fa-tachometer"></i></a></li>
                            <li><a className={cx("nav-link", style.navLink)} href="#"><i className="fa fa-user-circle"></i></a></li>
                            <li><a href="#" className="btn btn-primary"><i className="fa fa-plus-circle"></i> Add Your Item </a></li>

                        </ul>
                    </div>
                </nav>
            </div> 
        </div> /** container-fluid */
    )
}

export default Navbar
