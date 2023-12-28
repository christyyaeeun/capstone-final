import React from 'react'
import Menu from './Menu';
import OurStory from '../components/home/OurStory';
import Reviews from '../components/home/Reviews';
import Component from '../components/Component';
import Hero from '../components/home/Hero';

const Home = () => {
    return (
        <div>
            {/* <Heading /> */ }
            <Hero />
            <Component />
            {/* <MenuArticle /> */ }
            {/* <ImageArticle /> */ }
            <Reviews />
            <OurStory />
        </div>
    )
}

export default Home