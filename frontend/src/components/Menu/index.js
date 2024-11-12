"use client";

import { useState } from 'react';
import Link from 'next/link';
import Taba from '../Taba/Taba';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="px-4 md:px-20 flex md:justify-center justify-between items-center max-w-full max-h-26 pt-16">
        <Taba />
        <ul className="hidden md:flex w-full items-center text-xl text-cyan-50 pl-16">
          <li className="flex-1 text-center border-b-2 xl:px-4 px-1 py-2 border-transparent hover:border-cyan-50">
            <Link href="./">Início</Link>
          </li>
          <li className="flex-1 text-center border-b-2 xl:px-4 px-1 py-2 border-transparent hover:border-cyan-50">
            <Link href="/about">Sobre Nós</Link>
          </li>
          <li className="flex-1 text-center border-b-2 xl:px-4 px-1 py-2 border-transparent hover:border-cyan-50">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="flex-1 text-center border-b-2 xl:px-4 px-1 py-2 min-w-32 border-transparent hover:border-cyan-50">
            <Link href="/register">Enviar Projetos</Link>
          </li>
        </ul>
        {/* Sandwich Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-gray-200 rounded-full hover:bg-[#9e005c] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full text-cyan-50 text-left px-12 py-4 ">
          <ul>
            <li className="py-2">
              <Link href="./" onClick={() => setIsOpen(false)}>Início</Link>
            </li>
            <li className="py-2">
              <Link href="/about" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
            </li>
            <li className="py-2">
              <Link href="/projects" onClick={() => setIsOpen(false)}>Projetos</Link>
            </li>
            <li className="py-2">
              <Link href="/register" onClick={() => setIsOpen(false)}>Enviar Projetos</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;