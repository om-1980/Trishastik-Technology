'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the menuRef exists and if the clicked element is outside of the menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } 
    else if(!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <header
      className={`bg-primary text-primary-foreground px-4 lg:px-16 py-5 text-xs flex items-center justify-between z-50 md:fixed top-0 left-0 w-full shadow-md transition-all duration-300 ${
        isScrolled ? 'bg-opacity-80' : 'bg-opacity-100'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(26, 58, 73, 0.8)' : 'rgba(26, 58, 73, 1)' }}
    >
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <div className="font-bold transform hover:scale-125">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={32}
            height={32}
          />
        </div>
        <span className="font-bold">Trishastik Technology</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link
          href="/healthcare"
          className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
        >
          Healthcare
        </Link>
        <Link
          href="/jobfusion"
          className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
        >
          Job Fusion
        </Link>
        <Link
          href="/solutions"
          className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
        >
          Solutions & Consultancy
        </Link>
        <Link
          href="/about"
          className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
        >
          About
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white font-bold focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? '✖️' : '☰'}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          ref={menuRef} // Reference to the menu
          className="md:hidden absolute top-16 left-0 w-full bg-[#344C64] bg-opacity-90 flex flex-col items-center gap-6 py-6 text-white z-40"
        >
          <Link
            href="/healthcare"
            className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Healthcare
          </Link>
          <Link
            href="/jobfusion"
            className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Job Fusion
          </Link>
          <Link
            href="/solutions"
            className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solutions & Consultancy
          </Link>
          <Link
            href="/about"
            className="font-bold transition-transform duration-300 transform hover:scale-125 hover:text-[#B6FFFA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
