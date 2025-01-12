import React, { useState } from 'react';
import { X, Menu, Twitter, Send } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed w-full top-0 left-0 z-50 px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-between items-center">
                    {/* Logo with hover effect */}
                    <div className="text-white w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 hover:scale-105">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path
                                fill="currentColor"
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                className="transition-all duration-300"
                            />
                        </svg>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300">
                        <div className="flex gap-6 bg-blue-500/30 backdrop-blur-md rounded-full px-8 py-3 transition-all duration-300">
                            <button className="text-yellow-400 font-bold hover:text-yellow-300 transition-all duration-300 hover:scale-105">
                                HOME
                            </button>
                            <button className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105">
                                ABOUT US
                            </button>
                            <button className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105">
                                TWITTER SPACES
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <Menu className="w-8 h-8 text-white" />
                        </button>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <a href="https://x.com/NSGonchain" target='_blank' className="bg-white hover:bg-white p-2.5 rounded-lg transition-colors">
                            <Twitter className="w-6 h-6 text-black" />
                        </a>
                        <a href="https://t.co/eGi1OU8L7m" target='_blank' className="bg-white hover:bg-white p-2.5 rounded-lg transition-colors">
                            <Send className="w-6 h-6 text-black" />
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu with smooth transitions */}
                <div className={`fixed inset-0 bg-blue-600/95 z-50 flex flex-col transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 gap-8">
                        {['HOME', 'ABOUT US', 'TWITTER SPACES'].map((item, index) => (
                            <button
                                key={item}
                                className={`text-${item === 'HOME' ? 'yellow-400' : 'white'} text-2xl font-bold
                transition-all duration-500 hover:scale-110 hover:text-yellow-300
                transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;