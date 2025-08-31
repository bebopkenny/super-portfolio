import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
      description: "Building responsive and interactive user interfaces with modern frameworks"
    },
    {
      icon: <Database size={24} />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "Next.js", "PHP", "Flask", ".NET", "Spring Boot" ],
      description: "Creating robust APIs and server-side applications with scalable architecture"
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
      description: "Creating robust APIs and server-side applications with scalable architecture"
    },
    {
      icon: <Globe size={24} />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"],
      description: "Deploying and managing applications in cloud environments"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      description: "Cross-platform mobile applications with native performance"
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems"],
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Zap size={24} />,
      title: "Tools & Technologies",
      skills: ["Git", "Webpack", "Jest", "GraphQL", "REST APIs", "Microservices"],
      description: "Modern development tools and architectural patterns"
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-description text-lg text-muted max-w-2xl mx-auto">
            I specialize in modern web technologies and love learning new tools to solve complex problems. 
            Here's what I work with on a daily basis.
          </p>
        </div>

        <div className="skills-grid grid grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card animate-fade-in-up">
              <div className="skill-icon mb-4">
                {category.icon}
              </div>
              <h3 className="skill-title text-xl font-semibold mb-2">
                {category.title}
              </h3>
              <p className="skill-description text-muted text-sm mb-4">
                {category.description}
              </p>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="skills-stats mt-8">
          <div className="stats-grid grid grid-2">
            <div className="stat-card card text-center">
              <div className="stat-number text-3xl font-bold gradient-text mb-2">
                500000+
              </div>
              <div className="stat-label text-muted">
                Projects Completed
              </div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-number text-3xl font-bold gradient-text mb-2">
                3+
              </div>
              <div className="stat-label text-muted">
                Years Experience
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .skills-section {
          background-color: var(--background);
        }

        .section-title {
          color: var(--foreground);
        }

        .section-description {
          margin-left: auto;
          margin-right: auto;
        }

        .skills-grid {
          margin-bottom: 60px;
        }

        .skill-card {
          position: relative;
          height: 100%;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .skill-icon {
          color: var(--primary);
          background-color: rgba(62, 207, 142, 0.1);
          width: 48px;
          height: 48px;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-title {
          color: var(--foreground);
        }

        .skill-description {
          line-height: 1.5;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          background-color: var(--muted);
          color: var(--muted-foreground);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border-color: var(--primary);
        }

        .skills-stats {
          border-top: 1px solid var(--border);
          padding-top: 60px;
        }

        .stats-grid {
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(62, 207, 142, 0.05) 0%, rgba(34, 211, 238, 0.05) 100%);
          border: 1px solid rgba(62, 207, 142, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
        }

        .stat-label {
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;