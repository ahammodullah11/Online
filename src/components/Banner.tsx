import React from 'react';
import bannerImg from '../assets/banner-stack.png'; // অথবা hero.png

interface BannerProps {
  onShowToast: (message: string) => void;
}

export const Banner: React.FC<BannerProps> = ({ onShowToast }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onShowToast('Explore Technologies Loaded!')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg transition shadow-sm cursor-pointer"
            >
              Explore Technologies
            </button>
            <button
              onClick={() => onShowToast('Learn More section opened!')}
              className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg border border-gray-200 transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* আসল 3D Stack Image */}
        <div className="flex justify-center">
          <img 
            src={bannerImg} 
            alt="Development Stack Banner" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};