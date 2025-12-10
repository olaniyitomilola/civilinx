import React from "react";
import IntroScreen from "../component/Typewriter"
const Typewriter = ({ text, duration = 2000, className = '' }) => {
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


const NextScreen = ({ onFinish }) => {
  const words = ["Railway", "Civils", "Nuclear", "Marine", "and many more..."];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 500); // change every 1.5s

    // stop after last word
    if (index >= words.length) {
      clearInterval(id);
      onFinish();
    }

    return () => clearInterval(id);
  }, [index, words.length, onFinish]);

  return (
    <main className="flex flex-1 items-center justify-center bg-[#3f3bde] text-white">
      <h2 className="text-4xl md:text-6xl font-extrabold transition-all duration-500">
        {words[index] || words[words.length - 1]}
      </h2>
    </main>
  );
};

const FinalScreen = () => (
  <main className="flex max-w-5xl mx-auto px-4 text-center flex-1 items-center justify-center bg-white text-[#3f3bde]">
    <h2 className="text-3xl md:text-6xl font-extrabold">
      <Typewriter
              text="Welcome to Civilinx."
              duration={3000}
      />
      <p className="coming-soon text-2xl md:text-3xl font-semibold text-[#A7A9AC]">
        Your gateway to jobs in the construction industry.
      </p>


    </h2>
  </main>
);


const Home = () => {
  const [phase, setPhase] = React.useState("intro");

  React.useEffect(() => {
    // move from Intro → Next after typewriter (4200ms) + 2000ms delay
    const timer = setTimeout(() => setPhase("next"), 4200);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "intro") return <IntroScreen />;
  if (phase === "next") return <NextScreen onFinish={() => setPhase("final")} />;
  if (phase === "final") return <FinalScreen />;
};



export default Home;