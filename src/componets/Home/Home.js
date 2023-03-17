import React from 'react';
import Nav from '../Nav/Nav';
import './Home.scss';
import Banner from '../Banner/Banner';

function Home () {
    return (
        <div className='home'>
            <Nav />
            <Banner />
        </div>
    )
}

export default Home;