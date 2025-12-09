// Maternity.jsx
import React from 'react';
import LazyImage from '../component/LazyImage';
const weddingImages = [
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180379/olan/DSC_6870_z7geiu.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180401/olan/DSC_8981_wv0bpt.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180402/olan/DSC_9004_et2ten.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180381/olan/DSC_6884_tusdkp.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180382/olan/DSC_6900_wuc7ns.jpg'
];

const Maternity = () => {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold">Maternity Gallery</h1>
        <p className="text-lg mt-2 text-gray-300">The joy of motherhood</p>
      </header>

      <section className="px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingImages.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Maternity ${index + 1}`} />
        ))}
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ↑ Top
      </button>
    </div>
  );
};

export default Maternity;
