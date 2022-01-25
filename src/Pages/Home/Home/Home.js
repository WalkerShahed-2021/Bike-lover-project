import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from './../../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import HomeReview from './../HomeReview/HomeReview';
import OurServices from '../../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <HomeReview></HomeReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;



