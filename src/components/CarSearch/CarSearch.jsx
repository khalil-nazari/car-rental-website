import React from 'react'
import style from './carSearch.module.css'
import cx from 'classnames'
import { Link } from 'react-router-dom';

function CarSearch(props) {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={cx("m-auto mt-4", style.searchContainer)}>
            <ul className={cx("nav nav-tabs", style.navTabs)} id="myTab" role="tablist">
                <li className="nav-item">
                    <a className={cx("nav-link active")} id="allCondition-tab" data-toggle="tab" href="#allCondition" role="tab" aria-controls="allCondition" aria-selected="true">All Condition</a>
                </li>
                <li className="nav-item">
                    <a className={cx("nav-link")} id="newCars-tab" data-toggle="tab" href="#newCars" role="tab" aria-controls="newCars" aria-selected="false">New Cars</a>
                </li>
                <li className="nav-item">
                    <a className={cx("nav-link")} id="usedCars-tab" data-toggle="tab" href="#usedCars" role="tab" aria-controls="usedCars" aria-selected="false">Used Cars</a>
                </li>

                <li className="nav-item">
                    <a className={cx("nav-link")} id="CertifiedUsedCars-tab" data-toggle="tab" href="#CertifiedUsedCars" role="tab" aria-controls="CertifiedUsedCars" aria-selected="false">Certified Used Cars</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="allCondition" role="tabpanel" aria-labelledby="allCondition-tab">
                        <form onSubmit={handleSearchSubmit}>
                            <div className={style.Conditions}>
                                <div className={cx(style.inputBox)}>
                                    <select className="form-control">
                                        <option value="compact">Compact</option>
                                        <option value="toyota-3">Toyota 3</option>
                                        <option value="benz">Benz</option>
                                        <option value="benz-s4">Benz S4</option>
                                        <option value="honda-civic">Honda Civic</option>
                                    </select>
                                </div>
                                <div className={cx(style.inputBox)}>
                                    <select name="" id="" className="form-control">
                                        <option value="">1 Series</option>
                                        <option value="">3 Series</option>
                                        <option value="">2020 Series</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <select className="form-control" name="" id="">
                                        <option value="">$100</option>
                                        <option value="">$355</option>
                                        <option value="">$ 3000</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <Link to="/cars" type="submit" className="btn btn-secondary">Find Car</Link>
                                </div>
                            </div>   
                        </form>
                    </div>

                    <div className="tab-pane fade" id="newCars" role="tabpanel" aria-labelledby="newCars-tab">
                        <form>
                            <div className={style.Conditions}>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")}>
                                        <option value="compact">Compact</option>
                                        <option value="toyota-3">Toyota 3</option>
                                        <option value="benz">Benz</option>
                                        <option value="benz-s4">Benz S4</option>
                                        <option value="honda-civic">Honda Civic</option>
                                    </select>
                                </div>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">1 Series</option>
                                        <option value="">3 Series</option>
                                        <option value="">2020 Series</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">$100</option>
                                        <option value="">$355</option>
                                        <option value="">$ 3000</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <Link to="/cars" type="submit" className="btn btn-secondary">Find Car</Link>
                                </div>

                            </div>   
                        </form>
                    </div>

                    <div className="tab-pane fade" id="usedCars" role="tabpanel" aria-labelledby="usedCars-tab">
                        <form>
                            <div className={style.Conditions}>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")}>
                                        <option value="compact">Compact</option>
                                        <option value="toyota-3">Toyota 3</option>
                                        <option value="benz">Benz</option>
                                        <option value="benz-s4">Benz S4</option>
                                        <option value="honda-civic">Honda Civic</option>
                                    </select>
                                </div>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">1 Series</option>
                                        <option value="">3 Series</option>
                                        <option value="">2020 Series</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">$100</option>
                                        <option value="">$355</option>
                                        <option value="">$ 3000</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <Link to="/cars" type="submit" className="btn btn-secondary">Find Car</Link>
                                </div>

                            </div>   
                        </form>
                    </div>

                    <div className="tab-pane fade" id="CertifiedUsedCars" role="tabpanel" aria-labelledby="CertifiedUsedCars-tab">
                        <form>
                            <div className={style.Conditions}>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")}>
                                        <option value="compact">Compact</option>
                                        <option value="toyota-3">Toyota 3</option>
                                        <option value="benz">Benz</option>
                                        <option value="benz-s4">Benz S4</option>
                                        <option value="honda-civic">Honda Civic</option>
                                    </select>
                                </div>
                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">1 Series</option>
                                        <option value="">3 Series</option>
                                        <option value="">2020 Series</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <select className={cx("form-control")} name="" id="">
                                        <option value="">$100</option>
                                        <option value="">$355</option>
                                        <option value="">$ 3000</option>
                                    </select>
                                </div>

                                <div className={cx(style.inputBox)}>
                                    <Link to="/cars" type="submit" className="btn btn-secondary">Find Car</Link>
                                </div>

                            </div>   
                        </form>
                    </div>
                </div>
             
        </div>

    )
}

export default CarSearch
