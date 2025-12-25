const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Diligent Squad Technologies',
      period: 'January 2023 - Present',
      location: 'Chennai, India',
      role: 'Full Stack Developer',
      responsibilities: [
        'Designed and developed scalable RESTful backend services using Java & Spring Boot, supporting authentication, product workflows, and data retrieval',
        'Implemented JWT-based authentication and authorization using Spring Security, ensuring secure API access across services',
        'Built microservice-oriented backend modules, enabling independent deployment and improved system maintainability',
        'Optimized database access using Hibernate/JPA with MongoDB and SQL, reducing query latency and improving API performance',
        'Designed and exposed cloud-native APIs using Azure Functions (Python) for serverless backend workflows',
        'Designed and implemented a variation listing table with sorting functionality based on price, attributes, and availability using jQuery',
        'Customized and optimized ISML templates in the Intershop framework, enhancing UI rendering and ensuring a responsive user experience',
        'Led data migration of 10,000+ records, automating validation and ensuring 100% data integrity in production',
        'Debugged and resolved production issues, improving availability and reducing manual operational effort'
      ]
    },
    {
      title: 'Graduate Apprentice Trainee',
      company: 'ZF Wabco India Limited',
      period: 'June 2020 - May 2022',
      location: 'Chennai, India',
      role: 'Production Leader',
      responsibilities: [
        'Worked on engineering process automation and optimization, identifying efficiency and safety improvements',
        'Applied structured problem-solving to improve assembly and testing workflows',
        'Collaborated with cross-functional teams, gaining exposure to production systems and quality standards'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="portfolio-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item card">
              <div className="experience__item-header">
                <div>
                  <h3 className="experience__item-title">{exp.title}</h3>
                  <p className="experience__item-company">{exp.company}</p>
                </div>
                <div className="experience__item-meta">
                  <p className="experience__item-period">{exp.period}</p>
                  <p className="experience__item-location">{exp.location}</p>
                </div>
              </div>
              <span className="experience__item-role">{exp.role}</span>
              <ul className="experience__item-responsibilities">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
