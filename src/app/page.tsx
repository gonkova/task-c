import Image from "next/image";
import React from 'react';
import Info from './components/Info';
import PhoneNumberForm from './components/PhoneNumberForm';
import ImageGallery from "./components/ImageGallery";

const Home = () => {
  return (
    <>
      <Info />
      <PhoneNumberForm />
      <ImageGallery />
    </>
  );
};

export default Home;
