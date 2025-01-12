import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Star } from 'lucide-react';
import heroIcon from '../assets/images.jpeg';

const ProfileCard = ({ role, rotation, position, imageUrl }) => {
  return (
    <div
      className={`absolute bg-blue-400/30 backdrop-blur-sm p-4 rounded-lg transform 
      transition-all duration-500 ease-in-out
      hover:scale-105 hover:rotate-0 hover:bg-blue-400/40
      ${position}
      w-24 md:w-28 lg:w-32`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="w-16 h-16 rounded-full mb-2 mx-auto overflow-hidden md:w-20 md:h-20 
        transition-transform duration-300 hover:scale-105">
        <img
          src={heroIcon}
          alt={role}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <p className="text-white text-sm font-medium tracking-wide text-center md:text-base 
        transition-all duration-300">{role}</p>
    </div>
  );
};

const Hero = () => {
  const profiles = [
    { role: 'SUPPLIER', rotation: -12, position: 'top-24 left-4 md:top-44 md:left-24 lg:left-48' },
    { role: 'BUYER', rotation: 12, position: 'top-24 right-4 md:top-44 md:right-24 lg:right-48' },
    { role: 'MAVEN', rotation: -12, position: 'bottom-32 left-4 md:bottom-44 md:left-24 lg:left-48' },
    { role: 'DESIGNER', rotation: 12, position: 'bottom-32 right-4 md:bottom-44 md:right-24 lg:right-48' },
  ];

  return (
    <div className="relative min-h-screen bg-blue-600 overflow-hidden px-4 md:px-8 transition-all duration-300">
      {/* Wavy background pattern with animation */}
      <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="border-t-2 border-white/30 transition-all duration-500"
            style={{
              transform: `rotate(${i * 2}deg) translateY(${i * 50}px)`,
              position: 'absolute',
              width: '200%',
              left: '-50%'
            }}
          />
        ))}
      </div>

      {/* Corner Icons with hover effects */}
      <div className="absolute top-8 left-8 text-yellow-400 md:top-12 md:left-12 
        transition-all duration-300 hover:scale-110">
        <ArrowDownLeft className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
          transition-transform duration-300" />
      </div>
      <div className="absolute bottom-8 right-8 text-yellow-400 md:bottom-12 md:right-12 
        transition-all duration-300 hover:scale-110">
        <ArrowUpRight className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
          transition-transform duration-300" />
      </div>

      {/* Stars with rotation animation */}
      <div className="absolute top-20 right-20 text-yellow-400 md:top-24 md:right-24 
        transition-all duration-300 hover:scale-110 hover:rotate-180">
        <Star className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-yellow-400 
          transition-all duration-500" />
      </div>
      <div className="absolute bottom-20 left-20 text-yellow-400 md:bottom-24 md:left-24 
        transition-all duration-300 hover:scale-110 hover:rotate-180">
        <Star className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-yellow-400 
          transition-all duration-500" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen 
        transition-all duration-500">
        <div className="flex flex-col items-center transform transition-all duration-500">
          <h1 className="text-white text-center font-black mb-12 tracking-wider leading-tight 
            font-badaboom text-5xl md:text-7xl lg:text-8xl pt-20 md:pt-0
            transition-all duration-500 hover:scale-105">
            <span className="block transition-transform duration-300 hover:scale-105">WELCOME</span>
            <span className="block transition-transform duration-300 hover:scale-105">TO THE NSG</span>
            <span className="block transition-transform duration-300 hover:scale-105">COMMUNITY</span>
          </h1>

          <button className="bg-white text-black px-8 py-3 md:px-12 md:py-4 rounded-full 
            font-extrabold text-lg md:text-xl hover:bg-blue-50 
            transition-all duration-300 transform hover:scale-110 hover:shadow-lg
            mt-8 md:mt-0 mb-20 md:mb-0">
            JOIN CULT
          </button>
        </div>

        {/* Profile Cards */}
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.role}
            {...profile}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;