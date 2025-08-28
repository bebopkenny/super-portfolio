import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Available for new opportunities
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Full Stack Developer & UI/UX Designer
            </h2>
            
            <p className="hero-description">
              I create exceptional digital experiences through clean code and thoughtful design. 
              Passionate about building scalable applications that make a difference.
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Get In Touch
              </a>
              <a href="#projects" className="button button-secondary">
                View My Work
              </a>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">portfolio.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">name</span>: <span className="code-string">'Your Name'</span>,
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>],
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">passion</span>: <span className="code-string">'Building amazing things'</span>
                  </div>
                  <div className="code-line">
                    {'}'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button onClick={scrollToNextSection} className="scroll-indicator">
          <ArrowDown size={20} />
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
          background: linear-gradient(135deg, rgba(62, 207, 142, 0.05) 0%, rgba(34, 211, 238, 0.05) 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 14px;
          color: var(--muted-foreground);
          margin-bottom: 24px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: var(--primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 16px;
          color: var(--foreground);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--muted-foreground);
          margin-bottom: 24px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--muted-foreground);
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .hero-social {
          display: flex;
          gap: 16px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--muted-foreground);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.3s ease;
        }

        .hero-card:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        .code-block {
          width: 400px;
          background-color: var(--background);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background-color: var(--card);
          border-bottom: 1px solid var(--border);
        }

        .code-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27ca3f; }

        .code-title {
          font-size: 12px;
          color: var(--muted-foreground);
        }

        .code-content {
          padding: 20px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 14px;
          line-height: 1.5;
        }

        .code-line {
          margin-bottom: 4px;
        }

        .code-indent {
          padding-left: 20px;
        }

        .code-keyword { color: #ff79c6; }
        .code-variable { color: #8be9fd; }
        .code-property { color: #50fa7b; }
        .code-string { color: #f1fa8c; }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          animation: bounce 2s infinite;
          transition: color 0.2s ease;
        }

        .scroll-indicator:hover {
          color: var(--primary);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .code-block {
            width: 100%;
            max-width: 350px;
          }

          .hero-card {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;