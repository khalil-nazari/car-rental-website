import React from 'react'
import cx from 'classnames';
import style from './BrowsCarList.module.css'
import carImage from '../../assets/images/carlogo.jpg'
function BrowsCarList() {
    return (
        <div className="container-fluid mt-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={cx("pb-3",style.browsHeader)}>
                            <h3>Brows By <span className="text-success">Make</span></h3>
                            <a href="">Show all makes</a>
                        </div>

                        <div className={cx(style.browsLinks)}>
                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className={cx("pb-3",style.browsHeader)}>
                            <h3>Brows By <span className="text-success">Type</span></h3>
                            <a href="">Show all types</a>
                        </div>

                        <div className={cx(style.browsLinks)}>
                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>

                            <div className={style.items}>
                                <img src={carImage} alt="carlogo" className=""/>
                                <a href="">Check out</a>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className={style.hr}/>
            </div>
        </div>
    )
}

export default BrowsCarList
