import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../component/LazyImage'; 
const weddingImages = [
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180378/olan/DSC_6101_2_tko0zj.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180384/olan/DSC_7971_x8x8ex.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180383/olan/DSC_7714_krza1h.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180399/olan/DSC_8738_er36co.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180359/olan/DSC_5444_od6qvr.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180377/olan/DSC_6058_1_hl8vj1.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180418/olan/IMG_7122_zh8ved.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180420/olan/OIP_0572_copy_jzc2bl.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180421/olan/OIP_0956_copy_avlyxi.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180421/olan/OIP_0631_copy_rralhi.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180416/olan/DSC_9790_upfsqq.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180404/olan/DSC_9293_uiqf7g.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180404/olan/DSC_8890_ad0bqo.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180404/olan/DSC_9781_nveda0.jpg',

];


const Studio = () => {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold">Studio</h1>
        <p className="text-lg mt-2 text-gray-300">Scroll through beautiful images</p>
      </header>

      <section className="px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingImages.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Maternity ${index + 1}`} />
        ))}
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ↑ Top
      </button>
    </div>
  );
};

export default Studio;
