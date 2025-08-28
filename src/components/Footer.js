import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name gradient-text text-xl font-bold mb-2">
                Your Portfolio
              </h3>
              <p className="brand-tagline text-muted text-sm">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-section-title">Quick Links</h4>
                <ul className="footer-nav">
                  <li><a href="#hero" className="footer-link">Home</a></li>
                  <li><a href="#skills" className="footer-link">Skills</a></li>
                  <li><a href="#experience" className="footer-link">Experience</a></li>
                  <li><a href="#projects" className="footer-link">Projects</a></li>
                  <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Connect</h4>
                <ul className="footer-nav">
                  <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                  <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a></li>
                  <li><a href="mailto:your.email@example.com" className="footer-link">Email</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Resources</h4>
                <ul className="footer-nav">
                  <li><a href="/resume.pdf" target="_blank" className="footer-link">Resume</a></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                  <li><a href="#" className="footer-link">Newsletter</a></li>
                  <li><a href="#" className="footer-link">Uses</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p className="copyright-text text-sm text-muted">
                  © {currentYear} Your Name. Made with{' '}
                  <Heart size={14} className="heart-icon" />{' '}
                  using React & modern web technologies.
                </p>
              </div>
              
              <button onClick={scrollToTop} className="back-to-top" title="Back to top">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--card);
          border-top: 1px solid var(--border);
          margin-top: 80px;
        }

        .footer-content {
          padding: 60px 0 24px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-brand {
          max-width: 300px;
        }

        .brand-name {
          color: var(--foreground);
        }

        .brand-tagline {
          line-height: 1.5;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-section-title {
          color: var(--foreground);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav li {
          margin-bottom: 8px;
        }

        .footer-link {
          color: var(--muted-foreground);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .copyright-text {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .heart-icon {
          color: #ef4444;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .back-to-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--muted);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--muted-foreground);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-to-top:hover {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        @keyframes heartbeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 40px 0 20px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .copyright-text {
            justify-content: center;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;