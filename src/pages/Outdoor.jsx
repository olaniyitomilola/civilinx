import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../component/LazyImage';
const weddingImages = [
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180399/olan/DSC_8653_zeo1ih.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671016/olan/G3_al3i3b.jpg',
 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180352/olan/DSC_4736_yaaytk.jpg',
 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180355/olan/DSC_4741_cxmq7g.jpg',
 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180402/olan/DSC_8796_baivrj.jpg',
 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671055/olan/a22d32a5-551a-47a3-846b-0c56472c86f5_2_kmhxzk.jpg',
 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671022/olan/copyqcopy_uoy4ms.jpg',

];


const Outdoor = () => {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold">Outdoor</h1>
        <p className="text-lg mt-2 text-gray-300">The beauty of nature held still</p>
      </header>

      <section className="px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingImages.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Outdoor ${index + 1}`} />
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

export default Outdoor;
