import React from 'react';

const ParticleBackground = () => {
  return (
    <>
      <div className="fixed w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/15 to-transparent top-0 right-0 -translate-y-1/4 translate-x-1/4 blur-xl z-0"></div>
      <div className="fixed w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/15 to-transparent bottom-0 left-0 translate-y-1/4 -translate-x-1/4 blur-xl z-0"></div>
    </>
  );
};

export default ParticleBackground;