import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led team of 5 developers on major product releases",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Designed and built RESTful APIs handling 1M+ requests daily"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
      website: "https://techinnovations.com"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects from concept to deployment. Collaborated with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Reduced page load times by 50% through performance optimization",
        "Integrated third-party APIs and payment systems",
        "Maintained 99.9% uptime across all deployed applications"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "Stripe", "SASS"],
      website: "https://startupxyz.com"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2020 - 2021",
      type: "Contract",
      description: "Created responsive websites and web applications for various clients. Focused on modern frontend technologies and pixel-perfect implementations.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Increased client satisfaction scores by 25%",
        "Implemented modern design systems and component libraries",
        "Optimized websites for SEO achieving top 3 rankings"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Figma", "WordPress", "GraphQL"],
      website: "https://digitalagencypro.com"
    },
    {
      title: "Junior Web Developer",
      company: "Local Web Solutions",
      location: "Portland, OR",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Started my professional journey building websites for small businesses. Learned best practices and gained experience with various web technologies.",
      achievements: [
        "Completed 30+ small business websites",
        "Learned and implemented responsive design principles",
        "Provided ongoing maintenance and support for clients",
        "Collaborated with designers to translate mockups to code"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      website: "https://localwebsolutions.com"
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description text-lg text-muted max-w-2xl mx-auto">
            My journey in software development has been filled with exciting challenges and continuous learning. 
            Here's where I've made an impact.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="experience-card card">
                  <div className="experience-header">
                    <div className="experience-main">
                      <h3 className="experience-title text-xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <div className="experience-company flex items-center gap-2 mb-2">
                        <span className="company-name text-primary font-medium">
                          {exp.company}
                        </span>
                        {exp.website && (
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="company-link"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <div className="experience-meta flex flex-wrap gap-4 text-sm text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="employment-type">
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="experience-description text-muted mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="experience-achievements mb-4">
                    <h4 className="achievements-title text-sm font-semibold mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="experience-technologies">
                    <h4 className="tech-title text-sm font-semibold mb-2">
                      Technologies Used:
                    </h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          background: linear-gradient(135deg, rgba(62, 207, 142, 0.02) 0%, rgba(34, 211, 238, 0.02) 100%);
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          margin-bottom: 48px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          flex-shrink: 0;
          position: relative;
          padding-top: 8px;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background-color: var(--primary);
          border: 3px solid var(--background);
          border-radius: 50%;
          box-shadow: 0 0 0 3px var(--primary);
          z-index: 2;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 24px;
          bottom: -48px;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary), transparent);
          transform: translateX(-50%);
        }

        .timeline-content {
          flex: 1;
          min-width: 0;
        }

        .experience-card {
          position: relative;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-2px);
          border-color: var(--primary);
        }

        .experience-header {
          margin-bottom: 16px;
        }

        .experience-title {
          color: var(--foreground);
        }

        .company-name {
          font-size: 16px;
        }

        .company-link {
          color: var(--muted-foreground);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }

        .company-link:hover {
          color: var(--primary);
        }

        .experience-meta {
          align-items: center;
        }

        .employment-type {
          background-color: var(--muted);
          color: var(--muted-foreground);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .experience-description {
          line-height: 1.6;
        }

        .achievements-title,
        .tech-title {
          color: var(--foreground);
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: var(--muted-foreground);
          font-size: 14px;
          line-height: 1.5;
        }

        .achievement-item::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        .tech-tags {
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
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .timeline {
            margin-left: 0;
          }

          .timeline-item {
            gap: 16px;
          }

          .timeline-marker {
            padding-top: 4px;
          }

          .timeline-dot {
            width: 12px;
            height: 12px;
          }

          .experience-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px !important;
          }

          .tech-tags {
            gap: 6px;
          }

          .tech-tag {
            font-size: 11px;
            padding: 3px 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;