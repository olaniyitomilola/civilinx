// LazyImage.jsx
import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleColor = () => {
    setIsColor(prev => !prev);
  };

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {visible && (
        <img
          src={src}
          alt={alt}
          onClick={toggleColor}
          onTouchStart={toggleColor}
          className={`w-full h-auto rounded-xl shadow-md transition duration-700 ease-in-out cursor-pointer
            ${isColor ? 'grayscale-0' : 'grayscale'} hover:grayscale-0
          `}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
