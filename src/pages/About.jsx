import React, { useState } from 'react';

const About = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const imageUrl = 'https://res.cloudinary.com/olaniyitomilola/image/upload/v1750593928/olan/A12B_omm2az.jpg';

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-10 items-center">

                {/* Text Section */}
                <div className="lg:w-1/2 text-justify">
                    <h1 className="text-3xl font-bold mb-4">About O'lan Photography</h1>
                    <p className="text-gray-700 leading-relaxed">
                        At O’lan Photography, we deliver high-quality visual storytelling, specializing in weddings, corporate events, and diverse photography fields. Since 2011, we’ve built a personal, client-focused approach offering creative, reliable, and flexible services. Our talented team stays up-to-date with industry technology, ensuring excellence at a fair price. From local shoots to international destinations, we’re honored to preserve your cherished memories beautifully and forever.
                    </p>
                </div>

                {/* Image Section */}
               {/* Image Section */}
<div className="lg:w-1/2 w-full relative">
  {!imageLoaded && (
    <div className="w-full h-80 bg-gray-200 flex items-center justify-center animate-pulse rounded">
      <span className="text-gray-400">Loading image...</span>
    </div>
  )}
  <img
    src={imageUrl}
    alt="About"
    onLoad={() => setImageLoaded(true)}
    className={`
      w-full h-80 md:h-96 lg:h-[500px] object-cover rounded shadow-md transition-opacity duration-700 
      ${imageLoaded ? 'opacity-100' : 'opacity-0'}
    `}
  />
</div>

            </div>
        </div>
    );
};

export default About;
