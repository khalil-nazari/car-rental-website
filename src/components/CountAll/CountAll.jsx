import React from 'react'
import style from './CountAll.module.css'
import cx from 'classnames'; 
import bgImage from '../../assets/images/car-counts.jpg'; 


function CountAll() {
    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className={style.bgImage}>
            <div className={cx("container py-3 mt-4", style.CountContainer)}>
                <div className={cx("row py-5 text-center")}>
                    
                    <div className={cx("col-sm-12 col-md-6 col-lg-3", style.col)}>
                        <i className={cx("fa fa-object-ungroup", style.icon)}></i>
                        <div className={cx(style.countNumber)}>
                            <h2>321654</h2>
                            <span>cars for sale</span>
                        </div>
                    </div>

                    <div className={cx("col-sm-12 col-md-6 col-lg-3", style.col)}>
                        <i className={cx("fa fa-users", style.icon)}></i>
                        <div className={cx(style.countNumber)}>
                            <h2>951753</h2>
                            <span>visitors per day</span>
                        </div>
                    </div>


                    <div className={cx("col-sm-12 col-md-6 col-lg-3", style.col)}>
                        <i className={cx("fa fa-comment", style.icon)}></i>
                        <div className={cx(style.countNumber)}>
                            <h2>951753</h2>
                            <span>dealer reviews</span>
                        </div>
                    </div>

                    <div className={cx("col-sm-12 col-md-6 col-lg-3", style.col)}>
                        <i className={cx("fa fa-certificate", style.icon)}></i>
                        <div className={cx(style.countNumber)}>
                            <h2>951753</h2>
                            <span>verified dealers</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountAll
