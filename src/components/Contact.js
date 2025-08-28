import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
// import emailjs from 'emailjs-com'; // Uncomment when you set up EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual service details
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'your.email@example.com' // Replace with your email
        },
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
      );
      */

      // Simulated success for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/yourusername'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-description text-lg text-muted max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="contact-content grid grid-2 gap-8">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card card">
              <h3 className="contact-card-title text-2xl font-semibold mb-6">
                Let's Talk
              </h3>
              
              <p className="contact-intro text-muted mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>

              <div className="contact-details mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="contact-detail"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <div className="contact-label text-sm text-muted">
                        {info.label}
                      </div>
                      <div className="contact-value">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title text-lg font-semibold mb-4">
                  Follow Me
                </h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title text-2xl font-semibold mb-6">
                Send Message
              </h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`form-status ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <p>✅ Message sent successfully! I'll get back to you soon.</p>
                  ) : (
                    <p>❌ Failed to send message. Please try again or contact me directly.</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit button button-primary"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, rgba(62, 207, 142, 0.02) 0%, rgba(34, 211, 238, 0.02) 100%);
        }

        .contact-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-card,
        .contact-form {
          height: 100%;
        }

        .contact-card-title,
        .form-title {
          color: var(--foreground);
        }

        .contact-intro {
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          border-radius: var(--radius);
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .contact-detail:hover {
          background-color: var(--muted);
          transform: translateX(4px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: rgba(62, 207, 142, 0.1);
          color: var(--primary);
          border-radius: var(--radius);
          flex-shrink: 0;
        }

        .contact-text {
          flex: 1;
        }

        .contact-label {
          margin-bottom: 2px;
        }

        .contact-value {
          font-weight: 500;
          color: var(--foreground);
        }

        .social-title {
          color: var(--foreground);
        }

        .social-links {
          display: flex;
          gap: 12px;
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
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: var(--foreground);
          font-size: 14px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background-color: var(--input);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--foreground);
          font-size: 14px;
          transition: all 0.2s ease;
          resize: vertical;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(62, 207, 142, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--muted-foreground);
        }

        .form-textarea {
          min-height: 120px;
          font-family: inherit;
        }

        .form-status {
          padding: 12px 16px;
          border-radius: var(--radius);
          margin-bottom: 16px;
          font-size: 14px;
        }

        .form-status.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .form-status.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .form-submit {
          width: 100%;
          justify-content: center;
          padding: 16px 24px;
          font-size: 16px;
          position: relative;
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            justify-content: center;
          }

          .contact-details {
            align-items: center;
          }

          .contact-detail {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;