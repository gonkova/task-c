"use client";
import React, { useState, useEffect } from 'react';

const PhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidPhoneNumber) {
            setMessage('Телефонният номер беше изпратен успешно!');
            setPhoneNumber('');
        } else {
            setMessage('Моля, въведете валиден телефонен номер.');
            setPhoneNumber('');
        }
    };

    useEffect(() => {
        let timeout;
        if (message) {
            timeout = setTimeout(() => {
                setMessage('');
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [message]);

    useEffect(() => {
        const phoneNumberPattern = /^\d{10}$/;
        setIsValidPhoneNumber(phoneNumberPattern.test(phoneNumber));
    }, [phoneNumber]);

    return (
        <div className="bg-custom3 flex flex-col items-center justify-center p-4 md:p-20">
            <div className="font-bold text-4xl md:text-6xl font-grotesk text-white leading-10 md:leading-72 tracking-tight mb-6 md:mb-8 mt-5 md:-mt-1 ">
                Готови ли сте да  <br />
                работим заедно?
            </div>
            <p className="text-l text-white text-center mb-10">Оставете вашият телефон и ние ще се свържем с вас, за да <br />
                отговорим на всички въпроси скоро</p>
            <div className="bg-white rounded shadow-md max-w-md mb-7">
                {message && <div className="bg-green-200 text-green-800 p-3 rounded-t-md">{message}</div>}
                <form onSubmit={handleSubmit} className="flex items-center ">
                    <div className="flex-1 ">
                        <label htmlFor="phone" className="sr-only">Мобилен телефон</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 4a1 1 0 011-1h14a1 1 0 011 1v2l-8 4-8-4V4zm0 3l8 4 8-4v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7z" />
                                </svg>
                            </span>
                            <input type="tel" id="phone" name="phone" placeholder="Мобилен телефон"
                                value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)}
                                className="w-full pl-10 pr-3 py-5  rounded-lg focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`bg-custom2 text-custom3 text-bold py-5 px-3 rounded-r-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 ${isValidPhoneNumber ? '' : 'opacity-50 cursor-not-allowed'
                                }`}
                        >
                            Изпрати
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PhoneNumberForm;
