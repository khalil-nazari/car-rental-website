import React from 'react'
import style from './Sidebar.module.css'
import cx from 'classnames'


function Sidebar() {
    return (
        <div className={cx("bg-success text-light", style.sidebarWrapper)}>
            <div className={cx(style.header)}>
                <span className="">search options</span>
                <i className="fa fa-user"></i>
            </div>

            <div className={cx("mt-3")}>
                <form>
                    <select name="" id="" className="form-control">
                        <option value="">Condition</option>
                        <option value="">New</option>
                        <option value="">Used</option>
                        <option value="">Certified Used</option>
                    </select>

                    <select name="" id="" className=" mt-2 form-control">
                        <option value="">Make</option>
                        <option value="">BMW</option>
                        <option value="">Honda</option>
                        <option value="">Aura</option>
                        <option value="">Toyota</option>
                        <option value="">Ieeo</option>
                    </select>

                    <select name="" id="" className=" mt-2 form-control">
                        <option value="">Model</option>
                        <option value="">Series 1</option>
                        <option value="">Series 3</option>
                        <option value="">Altima</option>
                        <option value="">Avalon</option>
                    </select>

                    <select name="" id="" className=" mt-2 form-control">
                        <option value="">Max Milage</option>
                        <option value="">1000 and Less</option>
                        <option value="">1000 - 2000</option>
                        <option value="">2000 - 3000</option>
                        <option value="">3000 - 4000</option>
                        <option value="">More than 4000</option>
                    </select>

                    <select name="" id="" className=" mt-2 form-control">
                        <option value="">Max Year</option>
                        <option value="">2000 and Less</option>
                        <option value="">2000 - 2005</option>
                        <option value="">2005 - 2010</option>
                        <option value="">2010 - 2015</option>
                        <option value="">2015 and above</option>
                    </select>

                    <select name="" id="" className=" mt-2 form-control">
                        <option value="">Transmision</option>
                        <option value="">Automatic</option>
                        <option value="">Manual</option>
                        <option value="">Semi-automatic</option>
                    </select>

                    <input type="text" placeholder="Location.." className="mt-2 form-control"/>

                    <input type="text" placeholder="Other features" className="mt-2 form-control"/>

                    <div className="mt-2">
                        <h5 htmlFor="">Select a Price</h5>
                        <input type="text" placeholder="Min.." className="mt-2 form-control"/>
                        <input type="text" placeholder="Max.." className="mt-2 form-control"/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Sidebar
