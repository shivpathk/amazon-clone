// React
import React, { useEffect, useState } from "react";
// Carousel library
import { Carousel } from "react-responsive-carousel";

function Banner() {
  const [smallWidth, setSmallWidth] = useState(false);

  // check windows.innerWidth on first render and make the width accodingly
  useEffect(() => {
    if (window.innerWidth <= 380) {
      setSmallWidth(true);
    } else {
      setSmallWidth(false);
    }
  }, []);

  // change state on window width change
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 380) {
      setSmallWidth(true);
    } else {
      setSmallWidth(false);
    }
  });

  // JSX 
  return (
    <div className='relative'>
      {/* Bottom shadow */}
      <div className='absolute z-10 h-32 bottom-0 w-full bg-gradient-to-t from-gray-100 to-transparent' />
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode={smallWidth ? true : false}
        centerSlidePercentage={smallWidth ? 200 : 100}
      >
        <div>
          <img src='https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg' alt='Banner' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg' alt='Banner' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg' alt='Banner' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' alt='Banner' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='Banner' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg' alt='Banner' />
        </div>
      </Carousel>
    </div>
  );
}

export default React.memo(Banner);
