import { Code, Server, Database, Layers, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code />,
      skills: ['Java', 'Python']
    },
    {
      title: 'Backend',
      icon: <Server />,
      skills: ['Spring Boot', 'REST APIs', 'Microservices', 'JWT', 'Spring Security']
    },
    {
      title: 'Databases',
      icon: <Database />,
      skills: ['MongoDB', 'SQL', 'Hibernate', 'JPA']
    },
    {
      title: 'System Design',
      icon: <Layers />,
      skills: ['API Design', 'Authentication Systems', 'Data Modeling', 'Scalability']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud />,
      skills: ['Azure Functions', 'CI/CD', 'Git']
    },
    {
      title: 'Tools & Other',
      icon: <Wrench />,
      skills: ['Postman', 'JIRA', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="portfolio-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__category card">
              <h3 className="skills__category-title">
                {category.icon}
                {category.title}
              </h3>
              <div className="skills__category-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="badge-custom">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
