import { Code2, Database, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="portfolio-container">
        <h2 className="section-title">About Me</h2>
        <div className="about__content">
          <p className="about__text">
            Backend Software Engineer with <strong>3+ years of engineering experience</strong> building
            scalable REST APIs and cloud-native backend services using <strong>Java, Spring Boot, Microservices, and Azure</strong>.
          </p>
          <p className="about__text">
            Experienced in <strong>JWT authentication</strong>, <strong>database design</strong>,
            <strong>performance optimization</strong>, and <strong>production debugging</strong>.
            Proven ability to own features end-to-end and improve system reliability and efficiency.
          </p>

          <div className="about__highlights">
            <div className="about__highlight-card card">
              <div className="about__highlight-card-icon">
                <Code2 size={28} />
              </div>
              <h3 className="about__highlight-card-title">Backend Development</h3>
              <p className="about__highlight-card-text">
                Expert in Java and Spring Boot ecosystem, building robust microservices architectures
              </p>
            </div>

            <div className="about__highlight-card card">
              <div className="about__highlight-card-icon">
                <Database size={28} />
              </div>
              <h3 className="about__highlight-card-title">Database Design</h3>
              <p className="about__highlight-card-text">
                Proficient in MongoDB and SQL with Hibernate/JPA for optimized data access
              </p>
            </div>

            <div className="about__highlight-card card">
              <div className="about__highlight-card-icon">
                <Cloud size={28} />
              </div>
              <h3 className="about__highlight-card-title">Cloud-Native APIs</h3>
              <p className="about__highlight-card-text">
                Experienced in designing serverless architectures with Azure Functions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
