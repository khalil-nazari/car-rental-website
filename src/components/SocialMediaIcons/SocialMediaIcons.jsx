import React from 'react'
import cx from 'classnames'
import style from './style.module.css'


function SocialMediaIcons({theStyle}) {
    return (
        <div className="">
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-facebook-square", style.fa, style.facebook)} ></i></a>
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-twitter", style.fa, style.twitter)}></i></a>
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-instagram", style.fa, style.instagram)}></i></a>
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-linkedin", style.fa, style.linkedin)}></i></a>
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-google-plus", style.fa, style.gPlus)}></i></a>
            <a href="http://www.google.com"><i style={theStyle} className={cx("fa fa-youtube", style.fa, style.youtube)}></i></a>
        </div>
    )
}

export default SocialMediaIcons
