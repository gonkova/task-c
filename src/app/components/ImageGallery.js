"use client";
import React from 'react';

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 md:w-5/6 mb-10 md:mb-16 mt-10 md:mt-20">
      <h1 className="font-bold text-4xl text-custom1 md:text-left text-center md:mt-14 mt-7 md:mb-8 mb-8 md:ml-5">Други услуги</h1>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="md:w-1/3 mb-4 mx-4">
          <img src="images/danger.jpg" alt="" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
          <p className="text-custom1 md:text-left font-bold md:text-2xl text-1xl mt-4 md:mt-6 text-center">Опасни товари(ADR)</p>
        </div>

        <div className="md:w-1/3 mb-4 mx-4">
          <img src="images/frigo.jpg" alt="" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
          <p className="text-custom1 md:text-left font-bold md:text-2xl text-1xl mt-4 md:mt-6 text-center">Хладилен транспорт</p>
        </div>
        <div className="md:w-1/3 mb-4 mx-4">
          <img src="images/big.jpg" alt="" className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
          <p className="text-custom1 md:text-left font-bold md:text-2xl text-1xl mt-4 md:mt-6 text-center">Извънгабаритни товари</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;


