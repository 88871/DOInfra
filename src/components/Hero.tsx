// import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import Button from './Button';

const Hero = () => {
  const typingTexts = [
    "aanleggen van kabelnetwerken",
    "uitvoeren van grondwerk",
    "verzorgen van bestrating",
    "realiseren van infrastructuur",
    "aanleggen van glasvezel",
  ];

  return (
    <div className="relative h-screen min-h-[600px] text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
          alt="Kabelnetwerk aanleg" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/75"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <div className="inline-block mb-4 py-2 px-4 bg-blue-700/60 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium uppercase tracking-widest">Specialist in ondergrondse infrastructuur</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
            D&O Infra B.V.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white/90 drop-shadow">
            Specialisten in ondergrondse infrastructuur, kabelnetwerken en grondwerk.
          </p>
          
          {/* Typing effect */}
          <div className="mt-8 text-xl md:text-2xl font-medium">
            Wij zijn experts in het{" "}
            <TypewriterEffect 
              texts={typingTexts}
              className="text-yellow-300 font-bold drop-shadow"
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenTexts={1500}
            />
          </div>
          
          {/* Buttons */}
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button 
                to="/diensten" 
                variant="outline" 
                size="lg" 
                className="w-full md:py-4 md:text-lg md:px-10 text-blue-900 bg-white hover:bg-gray-100"
              >
                Bekijk onze diensten
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button 
                to="/over-ons" 
                variant="secondary" 
                size="lg" 
                className="w-full md:py-4 md:text-lg md:px-10 bg-blue-900 hover:bg-blue-950 text-white"
              >
                Meer info
              </Button>
            </div>
          </div>
          
          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-white/80 text-sm">Jaar ervaring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">250+</div>
              <div className="text-white/80 text-sm">Projecten voltooid</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-white/80 text-sm">Professionals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm">Bereikbaar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 