import React from 'react'
import Nav from '../Nav/Nav'; 
import Navbar from '../Navbar/Navbar';
import NewUsedCars from '../NewUsedCars/NewUsedCars';
import bgImage from '../../assets/images/bmwbg.png'
import style from './Home.module.css'
import cx from 'classnames';
import CarSearch from '../CarSearch/CarSearch';
import BrowsCarList from '../BrowsCarList/BrowsCarList';

function Home() {
    return (
        <div>
            <Nav />
            <div className={cx(style.hero)} style={{'backgroundImage': `url(${bgImage}`}}>
                <Navbar />
            </div>
            <CarSearch />
            
            <BrowsCarList />
            
            <NewUsedCars />
        </div>
    )
}

export default Home
