import React from 'react';
import banner from '../banner.jpg'

const Home = () => {
    return (
        <main>
            <img src={ banner} alt="" className="absolute object-cover w-full h-full opacity-70"/>
            <section className="relative min-h-screen pt-12 lg:pt-60 px-8">
                <h1 className="text-6xl text-gray-50 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm Asif</h1>
                <button className="text-3xl text-gray-50 font-bold cursive leading-none lg:leading-snug bg-green-400 rounded p-4">Download my resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
                </svg>
                </button>
            </section>
            
        </main>
    );
};

export default Home;