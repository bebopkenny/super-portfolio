import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <span className="gradient-text text-xl font-bold">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
            <button onClick={() => window.open('https://theerrormaster.github.io/MauricioMaciasResume.pdf', '_blank', 'noopener,noreferrer')} className="nav-link">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contact
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .navigation.scrolled {
          border-bottom-color: var(--border);
          background-color: rgba(10, 10, 10, 0.95);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: var(--foreground);
          cursor: pointer;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 16px;
          padding: 20px 0;
          border-top: 1px solid var(--border);
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;