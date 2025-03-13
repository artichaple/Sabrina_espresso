import React from 'react';


const Hero = () => {
  return (
    <>
    <div className="home relative w-full h-[600px]">
  <img src="src/assets/hero_img.jpeg" alt="" className="w-full h-full object-cover" />
  
  <div className="imgtext absolute bottom-10 right-10 text-right">
    <p className="text-4xl text-amber-100 font-[Crimson] leading-tight">
      There’s Nothing More Valuable Than this
    </p>
    <p className="text-3xl text-amber-100 font-[Crimson] mt-2">
      IT’s Hand MADE ...
    </p>
  </div>
</div>

   



  </>
  );
};

export default Hero;
