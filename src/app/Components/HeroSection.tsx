import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-[80px] h-auto lg:h-[600px] p-4 lg:p-0">
      {/* Text Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold">Rocket Single</h1>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Seater</h1>
        <span className="text-lg lg:text-xl mt-4 inline-block hover:border-b-2 border-black underline cursor-pointer">
          Shop Now
        </span>
      </div>

      {/* Image Section */}
      <div>
        <Image
          src="/assets/images/heroImg.png"
          alt="zero"
          height={700}
          width={700}
          className="w-full max-w-[500px] lg:max-w-none h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
