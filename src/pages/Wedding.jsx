import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../component/LazyImage';
const weddingImages = [
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671055/olan/OIP_3344_xrd1fm.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671016/olan/G3_al3i3b.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671012/olan/A10_lqbxim.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671025/olan/11ba_byhmi3.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671016/olan/OLA4_2_fi4uuj.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671074/olan/15_p8kbfd.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671020/olan/9_l3evym.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671022/olan/3b55b681-33e5-463b-b86a-b3f94ca881a0_2_vrnemu.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671072/olan/11_kn6sxb.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671074/olan/1d5e27e3-9cca-4bf9-b960-6cb0f11d6212_2_yj3loh.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671054/olan/c4312dfd-c675-4fda-b4f9-6f84f5afb03c_2_r067mh.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671056/olan/5_1_wsek08.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671055/olan/LAU13_l6yuzz.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671073/olan/DSC_1897_j1fwx8.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671016/olan/OL3_2_zuorcn.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671016/olan/ol1_2_suwx9u.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671049/olan/3_kftbwg.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671026/olan/LAU10_po1t2e.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671032/olan/H4_oipq2v.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671021/olan/7_r7ibfe.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671021/olan/DSC_1256-copy_hu7fql.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671021/olan/OIP_3936-2_cpobpj.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671074/olan/LAU2_ckfpj4.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671019/olan/4_2_oeskg7.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750589947/olan/90bddbd1-e8e4-483e-b5fe-f913767233eb_2_ekabih.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750589929/olan/a7e3a6bb-fdf6-48ce-b7ab-507a2015102f_2_psavll.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750589926/olan/98796429-8708-4d0d-9eb1-4e4797076aba_2_dc991i.jpg',
  'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750673535/olan/gfggb_ryvoqv.jpg',
];


const Wedding = () => {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold">Wedding Gallery</h1>
        <p className="text-lg mt-2 text-gray-300">Scroll through beautiful memories</p>
      </header>

      <section className="px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weddingImages.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Wedding ${index + 1}`} />
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

export default Wedding;
