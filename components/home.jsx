import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
      	{
        	original: '../pictures/slider/anniversary.jpg',
        	thumbnail: '../pictures/slider/anniversary.jpg',
      	},
    	{
        	original: '../pictures/slider/goldenbell.jpg',
        	thumbnail: '../pictures/slider/goldenbell.jpg',
      	},
        {
        	original: '../pictures/slider/newmembers.jpg',
        	thumbnail: '../pictures/slider/newmembers.jpg',
      	},
            {
        	original: '../pictures/slider/runningman.jpg',
        	thumbnail: '../pictures/slider/runningman.jpg',
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
