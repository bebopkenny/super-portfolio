import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and order processing.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with modern React and Firebase.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript", "Socket.io"],
      category: "frontend",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskmanager-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Integrates with multiple weather APIs for accurate data.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SASS", "PWA"],
      category: "frontend",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A scalable API gateway built with Node.js and Express, featuring rate limiting, authentication, request/response transformation, and monitoring.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "Nginx"],
      category: "backend",
      githubUrl: "https://github.com/yourusername/api-gateway",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization, automated reporting, and performance insights.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "FastAPI", "AWS"],
      category: "fullstack",
      githubUrl: "https://github.com/yourusername/social-analytics",
      liveUrl: "https://social-analytics-demo.herokuapp.com",
      featured: true
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description: "A cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Built with React Native.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "SQLite", "Redux", "Firebase", "iOS/Android"],
      category: "mobile",
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      liveUrl: "https://play.google.com/store/apps/fitness-tracker",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description text-lg text-muted max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for creating 
            exceptional digital experiences. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="featured-projects mb-16">
          <h3 className="featured-title text-2xl font-semibold mb-8 text-center">
            ⭐ Featured Work
          </h3>
          <div className="featured-grid grid grid-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="featured-project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="project-description text-muted mb-4">
                    {project.description}
                  </p>
                  <div className="project-technologies mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                        View Live <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="project-filter mb-8">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`filter-button ${filter === category.key ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid grid grid-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title text-lg font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="project-description text-muted text-sm mb-3">
                  {project.description.slice(0, 120)}...
                </p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag small">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta text-center mt-12">
          <p className="cta-text text-muted mb-4">
            Want to see more of my work?
          </p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="button button-secondary">
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background-color: var(--background);
        }

        .featured-projects {
          border-bottom: 1px solid var(--border);
          padding-bottom: 60px;
        }

        .featured-title {
          color: var(--foreground);
        }

        .featured-grid {
          gap: 40px;
        }

        .featured-project-card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .featured-project-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img,
        .featured-project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay,
        .featured-project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 16px;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--foreground);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .project-link:hover {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .project-content {
          padding: 24px;
        }

        .project-card .project-content {
          padding: 20px;
        }

        .project-title {
          color: var(--foreground);
        }

        .project-description {
          line-height: 1.5;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          background-color: rgba(62, 207, 142, 0.1);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid rgba(62, 207, 142, 0.2);
        }

        .tech-tag.small {
          padding: 3px 10px;
          font-size: 11px;
        }

        .tech-tag.more {
          background-color: var(--muted);
          color: var(--muted-foreground);
          border-color: var(--border);
        }

        .project-actions {
          margin-top: 16px;
        }

        .project-filter {
          display: flex;
          justify-content: center;
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 4px;
        }

        .filter-button {
          background: none;
          border: none;
          color: var(--muted-foreground);
          padding: 8px 16px;
          border-radius: calc(var(--radius) - 2px);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-button:hover {
          color: var(--foreground);
        }

        .filter-button.active {
          background-color: var(--primary);
          color: var(--primary-foreground);
        }

        .projects-grid {
          min-height: 400px;
        }

        .project-card {
          height: 100%;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-2px);
        }

        .project-card .project-image {
          height: 160px;
        }

        .projects-cta {
          border-top: 1px solid var(--border);
          padding-top: 60px;
        }

        .cta-text {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .filter-buttons {
            flex-wrap: wrap;
            justify-content: center;
          }

          .filter-button {
            font-size: 12px;
            padding: 6px 12px;
          }

          .project-image {
            height: 180px;
          }

          .project-card .project-image {
            height: 140px;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;