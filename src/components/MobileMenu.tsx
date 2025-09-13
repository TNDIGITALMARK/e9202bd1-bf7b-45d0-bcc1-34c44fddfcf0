'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}