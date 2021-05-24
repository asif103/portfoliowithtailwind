import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-blue-400">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white-900" className="inline-flex items-center py-3 px-3 mr-4 text-green-800 hover:text-red-500 font-bold cursive tracking-widest text-4xl" >
                        Mohammed Asif
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-600" activeClassName="text-blue-900 bg-gray-200">
                        About me!
                    </NavLink>
                    <NavLink to="/posts" className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-600" activeClassName="text-blue-900 bg-gray-200">
                        Blogs
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 headline text-2xl my-6 rounded hover:text-green-600" activeClassName="text-blue-900 bg-gray-200">
                        My projects
                    </NavLink>
                </nav>
                <div className="inline-flex items-center">
                    <SocialIcon url="https://www.facebook.com/asif473/" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://github.com/asif103" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/asif473/" className="mr-4" target="_blank" fgColor="#ffffff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    );
};

export default NavBar;