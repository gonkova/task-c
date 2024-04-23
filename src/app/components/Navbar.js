"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className='bg-white '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link href='/'>
                                <div className="text-custom1 text-2xl font-bold font-inter font-grotesk">
                                    Website
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:flex items-center space-x-4 ml-52'>
                            <Link href='/'>
                                <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 ml-10'>
                                    Начало
                                </div>
                            </Link>
                            <Link href='/about'>
                                <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 '>
                                    За нас
                                </div>
                            </Link>
                            <Link href='/services'>
                                <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 '>
                                    Услуги
                                </div>
                            </Link>
                            <Link href='/prices'>
                                <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 '>
                                    Цени
                                </div>
                            </Link>
                            <Link href='/works'>
                                <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 '>
                                    Как работи
                                </div>
                            </Link>
                            <Link href='/contacts'>
                                <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                    Контакти
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex items-center space-x-4'>
                        <Link href='/profile'>
                            <div className='text-custom1 hover:bg-custom1 hover:text-white rounded-lg p-2 '>
                                Профил
                            </div>
                        </Link >
                        <Link href='/request'>
                            <button className="text-custom1 border border-custom1 hover:bg-custom1 hover:text-white  font-bold  py-2 px-4 rounded-lg">
                                Заявка за пратка
                            </button>
                        </Link>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                            {isClick ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M6 8.707l5.146-5.147a1 1 0 011.415 1.414L7.414 10l5.147 5.146a1 1 0 11-1.415 1.415L6 11.414l-5.146 5.147a1 1 0 11-1.415-1.415L4.586 10 1.44 6.854a1 1 0 111.415-1.414L6 8.707z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 5a1 1 0 100 2h12a1 1 0 100-2H4zm12 6a1 1 0 110 2H7a1 1 0 110-2h9z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden ml-4 mt-2'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col'>
                        <Link href='/'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                Начало
                            </div>
                        </Link>
                        <Link href='/about'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                За нас
                            </div>
                        </Link>
                        <Link href='/services'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                Услуги
                            </div>
                        </Link>
                        <Link href='/works'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                Как работи
                            </div>
                        </Link>
                        <Link href='/contacts'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                Контакти
                            </div>
                        </Link>
                        <Link href='/profile'>
                            <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2 '>
                                Профил
                            </div>
                        </Link>
                        <Link href='/request'>
                            <button className="text-custom1 border border-custom1 hover:bg-custom1 hover:text-white  font-bold  py-2 px-4 rounded-lg">
                                Заявка за пратка
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
