// AppScreenshots.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AppScreenshots = ({ title, screenshots }) => {
  return (
    <div className="app-screenshots max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={20}
      >
        {screenshots.map((screenshot, index) => (
          <div key={index} className="carousel-slide">
            <img src={screenshot} alt={`App Screenshot ${index + 1}`} className="w-full rounded-lg gap-8" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AppScreenshots;
