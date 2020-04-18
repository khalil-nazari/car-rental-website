import React from 'react'
import style from './NewUsedCars.module.css'
import cx from 'classnames'; 
import bmw from '../../assets/images/G30_image.jpg'

function NewUsedCars() {
    return (
        <div className="container py-2">
                <div className={"mb-3", style.header}>
                    <h3>New/Used Cars</h3>
                    <div className={style.headerLinks}>
                        <a href="" className={style.popularItem}>Popular Item</a>
                        <a href="" className={style.popularItem}>Recent Items</a>
                        <a href="" className="btn btn-success">Featured Items</a>
                    </div>
                </div>
           

            <div className="row mt-3">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <a href="" className={style.cardLink}>
                        <div class={cx(style.card)}>
                            <img src={bmw} className="card-img-top" alt="..." />

                            <div className={cx("card-body", style.NamePrice)}>
                                <p className={cx(style.name)}>Used 2015 bmw3 series</p>
                                <div className={style.price}>
                                    <p className={cx(style.discount)}>35000</p>
                                    <p className={cx(style.afterDiscount)}>$28000</p>
                                </div>
                            </div>

                            <div className={cx("card-body", style.details)}>
                                <p className={cx(style.km)}>1000 mi </p>
                                <p className={cx(style.fuel)}>15/18 </p>
                                <p className={cx(style.gearType)}>Automatic </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <a href="" className={style.cardLink}>
                        <div class={cx(style.card)}>
                            <img src={bmw} className="card-img-top" alt="..." />

                            <div className={cx("card-body", style.NamePrice)}>
                                <p className={cx(style.name)}>Used 2015 bmw3 series</p>
                                <div className={style.price}>
                                    <p className={cx(style.discount)}>35000</p>
                                    <p className={cx(style.afterDiscount)}>$28000</p>
                                </div>
                            </div>

                            <div className={cx("card-body", style.details)}>
                                <p className={cx(style.km)}>1000 mi </p>
                                <p className={cx(style.fuel)}>15/18 </p>
                                <p className={cx(style.gearType)}>Automatic </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <a href="" className={style.cardLink}>
                        <div class={cx(style.card)}>
                            <img src={bmw} className="card-img-top" alt="..." />

                            <div className={cx("card-body", style.NamePrice)}>
                                <p className={cx(style.name)}>Used 2015 bmw3 series</p>
                                <div className={style.price}>
                                    <p className={cx(style.discount)}>35000</p>
                                    <p className={cx(style.afterDiscount)}>$28000</p>
                                </div>
                            </div>

                            <div className={cx("card-body", style.details)}>
                                <p className={cx(style.km)}>1000 mi </p>
                                <p className={cx(style.fuel)}>15/18 </p>
                                <p className={cx(style.gearType)}>Automatic </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <a href="" className={style.cardLink}>
                        <div class={cx(style.card)}>
                            <img src={bmw} className="card-img-top" alt="..." />

                            <div className={cx("card-body", style.NamePrice)}>
                                <p className={cx(style.name)}>Used 2015 bmw3 series</p>
                                <div className={style.price}>
                                    <p className={cx(style.discount)}>35000</p>
                                    <p className={cx(style.afterDiscount)}>$28000</p>
                                </div>
                            </div>

                            <div className={cx("card-body", style.details)}>
                                <p className={cx(style.km)}>1000 mi </p>
                                <p className={cx(style.fuel)}>15/18 </p>
                                <p className={cx(style.gearType)}>Automatic </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="text-center">
                <button className={cx("btn btn-lg btn-success", style.morebtn)}>Show All</button>
            </div>
        
        </div>
    )
}
 
export default NewUsedCars
