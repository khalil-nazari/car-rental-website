import React from 'react'
import style from './Navbar.module.css'
import cx from 'classnames'
import {Link} from 'react-router-dom'

function Navbar({navStyle}) {
    console.log(navStyle)
    return (
        <div style={navStyle} className={cx("container-fluid", style.containerFluid)}>
            <div className={cx("container", style.navContainer)}>
                <nav className={cx("navbar navbar-expand-md navbar-dark", style.navbar)}>
                    <a className="navbar-brand" href="http://www.googl.com">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
 
                    <div className={cx("collapse navbar-collapse", style.colapseNavbar)} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className={cx("nav-link", style.navLink)}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/cars" className={cx("nav-link", style.navLink)}>Inventory</Link>
                            </li>

                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="http://www.googl.com">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="http://www.googl.com">‌Blog</a>
                            </li>
                            <li className="nav-item">
                            <a className={cx("nav-link", style.navLink)} href="http://www.googl.com">Deals</a>
                            </li>
                        </ul>

                        <ul className={cx("navbar-nav ml-auto", style.iconNavbar)}>
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.googl.com">
                                    <i className={cx("fa fa-tachometer", style.rightIcons)}></i>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.googl.com">
                                    <i className={cx("fa fa-user-circle", style.rightIcons)}></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="http://www.googl.com" className="btn btn-success text-light">
                                    <i className="fa fa-plus-circle"></i> Add Your Item 
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div> 
        </div> /** container-fluid */
    )
}

export default Navbar
