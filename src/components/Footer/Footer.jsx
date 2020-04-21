import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import style from './Footer.module.css'
import cx from 'classnames'


function Footer() {
    return (
        <footer className="container-fluid bg-dark text-light py-4 mt-3">
            <div className="container w-100">
                <div className="row">
                    <div className="col-smoo-12 col-md-4">
                        <form>
                            <input type="text" placeholder="Search..." className={cx("form-control", style.searchField)} />
                        </form>
                    </div>

                    <div className={cx("col-smoo-12 col-md-4", style.footerSocial)}>
                    <SocialMediaIcons theStyle={{fontSize:'16pt', padding: '0 8px'}}/>
                    </div>

                    <div className={cx("col-smoo-12 col-md-4", style.footerNav)}>
                       <a href="http://www.google.com">Help</a> 
                       <a href="http://www.google.com">About Us</a> 
                       <a href="http://www.google.com">Contact Us</a>
                       
                    </div>
                </div>

                <hr className="bg-light"/>

                <div className="row">
                    <div className="col-12 text-center">
                        &copy; Developed by Khalil.
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
