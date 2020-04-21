import React from 'react'
import style from './CarListView.module.css'
import cx from 'classnames'
import {Navbar} from '../index.js'; 
import cardImage from '../../assets/images/bmw--2.jpg'
import Sidebar from '../Sidebar/Sidebar';

function CarListView() {
    return (
        <div>
            <Navbar navStyle={{background: "green"}}/>

            <div className={cx("container py-3", style.cardContainer)}>
                <div className={style.innerContainer}>
                    <div className={style.sidebar}>
                        <Sidebar />
                    </div>

                    <div className={style.content}>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="font-weight-bold">Car For Sale</h2>
                                <hr/>
                                <div className={style.classified}>
                                    <h4>Featured Classified</h4>
                                    <p>34 Matches</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx("row mt-3", style.contentRow)}>
                            <div className="col-sm-12 col-md-4">
                                <div>
                                    <a href="http://www.google.com"><img src={cardImage} className="w-100" alt="alt"/></a>
                                </div>
                            </div>
                            <div className={cx("col-sm-12 col-md-8", style.col2)}>
                                <div className={cx(style.header)}>
                                    <div className={style.name}>
                                        <p>New 2020</p>
                                        <a href="http://www.google.com">Car name</a>
                                    </div>
                                    <div className={cx(style.price)}>
                                        $6464
                                    </div>
                                </div>

                                <div className={cx(style.details)}>
                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>MILAGE</span>
                                            <span className={style.num}>100 mil</span>
                                        </div>
                                    </div>

                                    <span className={style.vSeperator}></span>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>Fuel type</span>
                                            <span className={style.num}>Hybrid</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-car"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>engine</span>
                                            <span className={style.num}>3000</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-map-marker"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>distance</span>
                                            <span className={style.num}>Cars Auto...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(style.dealer)}>
                                    <a href="http://www.google.com">Dealer</a>
                                    <p><span>+689461321</span> <span>Show number</span></p>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-success"/>
                        
                        <div className={cx("row mt-3")}>
                            <div className="col-sm-12 col-md-4">
                                <a href="http://www.google.com"><img src={cardImage} className="w-100" alt="alt"/></a>
                            </div>
                            <div className={cx("col-sm-12 col-md-8", style.col2)}>
                                <div className={cx(style.header)}>
                                    <div className={style.name}>
                                        <p>New 2020</p>
                                        <a href="http://www.google.com">Car name</a>
                                    </div>
                                    <div className={cx(style.price)}>
                                        $6464
                                    </div>
                                </div>

                                <div className={cx(style.details)}>
                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>MILAGE</span>
                                            <span className={style.num}>100 mil</span>
                                        </div>
                                    </div>

                                    <span className={style.vSeperator}></span>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>Fuel type</span>
                                            <span className={style.num}>Hybrid</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-car"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>engine</span>
                                            <span className={style.num}>3000</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-map-marker"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>distance</span>
                                            <span className={style.num}>Cars Auto...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(style.dealer)}>
                                    <a href="http://www.google.com">Dealer</a>
                                    <p><span>+689461321</span> <span>Show number</span></p>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-success"/>

                        <div className={cx("row mt-3")}>
                            <div className="col-sm-12 col-md-4">
                                <div>
                                    <a href="http://www.google.com"><img src={cardImage} className="w-100" alt="alt"/></a>
                                </div>
                            </div>
                            <div className={cx("col-sm-12 col-md-8", style.col2)}>
                                <div className={cx(style.header)}>
                                    <div className={style.name}>
                                        <p>New 2020</p>
                                        <a href="http://www.google.com">Car name</a>
                                    </div>
                                    <div className={cx(style.price)}>
                                        $6464
                                    </div>
                                </div>

                                <div className={cx(style.details)}>
                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>MILAGE</span>
                                            <span className={style.num}>100 mil</span>
                                        </div>
                                    </div>

                                    <span className={style.vSeperator}></span>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-road"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>Fuel type</span>
                                            <span className={style.num}>Hybrid</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-car"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>engine</span>
                                            <span className={style.num}>3000</span>
                                        </div>
                                    </div>

                                    <div className={style.vSeperator}></div>

                                    <div className={style.detialItem}>
                                        <span className={style.icon}>
                                            <i className="fa fa-map-marker"></i>
                                        </span>
                                        <div className={style.carDetail}>
                                            <span className={style.text}>distance</span>
                                            <span className={style.num}>Cars Auto...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx(style.dealer)}>
                                    <a href="http://www.google.com">Dealer</a>
                                    <p><span>+689461321</span> <span>Show number</span></p>
                                </div>
                            </div>
                        </div>
                    
                        <hr className="bg-success"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarListView
