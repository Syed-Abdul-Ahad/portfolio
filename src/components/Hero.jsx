import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    // Delay canvas mount until after main UI is painted
    const timeout = setTimeout(() => setShowCanvas(true), 100); // 100ms delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex sm:flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#6A5ACD]'></div>
          <div className='w-1 h-40 sm:h-80 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center sm:text-left`}>
            Hi, I am <span className='text-[#6A5ACD]'>Abdul Ahad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}>
            I build robust, scalable backends and design seamless,
            <br className='sm:block hidden' /> responsive user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

