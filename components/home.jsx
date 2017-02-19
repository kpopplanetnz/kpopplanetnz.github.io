import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
      	{
        	original: './components/images/slider/anniversary.jpg',
        	thumbnail: './components/images/slider/anniversary.jpg',
      	},
    	{
        	original: './components/images/slider/goldenbell.jpg',
        	thumbnail: './components/images/slider/goldenbell.jpg',
      	},
        {
        	original: './components/images/slider/newmembers.jpg',
        	thumbnail: './components/images/slider/newmembers.jpg',
      	},
            {
        	original: './components/images/slider/runningman.jpg',
        	thumbnail: './components/images/slider/runningman.jpg',
      	},
]

const Home = () => (
	<div>
		<ImageGallery 
			items={images}
			sliderInterval={1000}
			autoPlay={true}
		/>

	</div>
)

export default Home;
