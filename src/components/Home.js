import React from 'react';
import ImageGallery from 'react-image-gallery';
import Divider from '@material-ui/core/Divider';

import '../css/image-gallery.css';
import { Grid } from '@material-ui/core';

const images = [
    {
        original: './images/slider/anniversary.jpg',
        thumbnail: './images/slider/anniversary.jpg',
    },
    {
        original: './images/slider/goldenbell.jpg',
        thumbnail:'./images/slider/goldenbell.jpg',
    },
    {
        original: './images/slider/newmembers.jpg',
        thumbnail: './images/slider/newmembers.jpg',
    },
    {
        original: './images/slider/runningman.jpg',
        thumbnail: './images/slider/runningman.jpg',
    },
]

const Home = () => (
    <Grid item xs={12} sm={10}>
        <ImageGallery 
            items={images}
            sliderInterval={1000}
            autoPlay={true}
            showThumbnails={false}
        />
        <Divider/>
    </Grid>
);

export default Home;
