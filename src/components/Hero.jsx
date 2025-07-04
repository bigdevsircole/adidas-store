import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import clip from '../assets/video/clip.mp4'; // ✅ Import video clip

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  return (
    <>
      <div className='relative h-auto w-auto flex flex-col'>
        {/* Background layer */}
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>

        {/* Foreground content */}
        <div className='relative z-20 opacity-100 grid items-center justify-items-center nike-container'>

          {/* Text Content */}
          <div className='grid items-center justify-items-center mt-28 md:mt-24 text-center'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200'>
              {title}
            </h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200'>
              {subtitle}
            </h1>
            <button
              type='button'
              className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'
            >
              {btntext}
            </button>
          </div>

          {/* Videos and Clip */}
          <div className='flex flex-wrap justify-center items-center gap-4 mt-6'>
            {videos?.map((video, i) => (
              <Clips key={i} imgsrc={video.imgsrc} clip={video.clip} />
            ))}
            <video
              src={clip}
              autoPlay
              loop
              muted
              playsInline
              className='w-90 h-48 rounded-xl shadow-lg object-cover'
            />
          </div>

          {/* Hero Image */}
          <div className='flex items-center mt-0'>
            <img
              src={img}
              alt='hero-img'
              className='w-auto h-[85vh] lg:h-[35vh] md:h-[41vh] sm:h-[31vh] xsm:h-[29vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;