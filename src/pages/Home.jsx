import React from "react";

const Typewriter = ({ text, duration = 4000, className = '' }) => {
  const [displayed, setDisplayed] = React.useState('');
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    if (prefersReduced) {
      setDisplayed(text);
      return;
    }

    let index = 0;
    const total = text.length;
    const interval = Math.max(10, Math.floor(duration / total));
    const id = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= total) {
        clearInterval(id);
      }
    }, interval);

    return () => clearInterval(id);
  }, [text, duration, prefersReduced]);

  return (
    <span className={className + ' typewriter'}>
      {displayed}
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
   <main className="flex flex-1 items-center justify-center  bg-white text-gray-900">
  <section
    className={`w-full flex flex-col items-center justify-center flex-1 transition-all duration-1000 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl text-[#3f3bde] md:text-6xl font-extrabold mb-4 leading-tight">
        <Typewriter
          text="Connecting workers to jobs in the construction industry"
          duration={4200}
        />
      </h2>
      <p className="coming-soon text-2xl md:text-3xl font-semibold text-[#A7A9AC]">
        Launching very soon
      </p>
    </div>
  </section>
</main>
  );
};

export default Home;