'use client';

import { useEffect, useRef } from 'react';
import Img1 from '../../assets/images/image1.jpg';
import Img2 from '../../assets/images/image2.jpg';
import Img3 from '../../assets/images/image3.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HorizontalSlider() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    // Get the width of the slider
    const sliderWidth = slider.scrollWidth;
    const containerWidth = container.offsetWidth;

    // Create the horizontal scrolling animation
    gsap.to(slider, {
      x: () => -(sliderWidth - containerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${sliderWidth - containerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Array of image data
  const images = [
    {
      id: 1,
      alt: 'Image 1',
      src: Img1,
    },
    {
      id: 2,
      alt: 'Image 2',
      src: Img2,
    },
    {
      id: 3,
      alt: 'Image 3',
      src: Img3,
    },
    {
      id: 4,
      alt: 'Image 4',
      src: Img1,
    },
    {
      id: 5,
      alt: 'Image 5',
      src: Img2,
    },
    {
      id: 6,
      alt: 'Image 6',
      src: Img3,
    },
    {
      id: 7,
      alt: 'Image 6',
      src: Img3,
    },
    {
      id: 8,
      alt: 'Image 6',
      src: Img3,
    },

    {
      id: 9,
      alt: 'Image 6',
      src: Img3,
    },
    {
      id: 10,
      alt: 'Image 6',
      src: Img3,
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Spacer to allow scrolling */}
      <div className='h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-transparent'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          Scroll Down
          <br />
          <span className='text-xl md:text-2xl font-normal'>
            to see the horizontal slider
          </span>
        </h1>
      </div>

      {/* Slider container */}
      <div ref={containerRef} className='h-screen w-full overflow-hidden'>
        <div ref={sliderRef} className='flex items-center h-full'>
          {images.map((image) => (
            <div
              key={image.id}
              className='min-w-[80vw] md:min-w-[50vw] h-[70vh] p-4 flex items-center justify-center'>
              <div className='relative w-full h-full rounded-xl overflow-hidden shadow-xl'>
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/30 flex items-end p-8'>
                  <h2 className='text-white text-3xl font-bold'>
                    Slide {image.id}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer at the end */}
      <div className='h-screen flex items-center justify-center bg-gradient-to-t from-primary/20 to-transparent'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          Thank You
          <br />
          <span className='text-xl md:text-2xl font-normal'>
            for scrolling through the slider
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HorizontalSlider;
