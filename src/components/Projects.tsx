import { ShoppingCart, Hotel, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DBNEXT - Intershop',
      tech: 'Intershop CMS, jQuery, JavaScript',
      icon: <ShoppingCart size={24} />,
      description: [
        'Developed and customized Product Detail Pages (PDP) using Intershop CMS, jQuery, and JavaScript for dynamic product variant display',
        'Implemented product filtering, sorting, and search functionality, supporting ascending/descending order and category-based filters',
        'Created custom filters and UI components to improve product navigation and customer experience'
      ]
    },
    {
      title: 'Hotel Booking Application',
      tech: 'Spring Boot, REST APIs, JPA, Hibernate',
      icon: <Hotel size={24} />,
      description: [
        'Developed and implemented key features such as user authentication, room availability tracking, and reservation management, improving booking efficiency',
        'Integrated RESTful APIs to facilitate seamless communication between front-end and back-end services',
        'Optimized database queries using Spring Data JPA and Hibernate, reducing query execution time'
      ]
    },
    {
      title: 'ERP Billing Application',
      tech: 'Azure Functions, Flutter, Python, MongoDB',
      icon: <FileText size={24} />,
      description: [
        'Developed a cross-platform mobile application using Flutter, integrated with Azure Functions (Python) for serverless backend operations',
        'Designed and implemented RESTful APIs using Azure Functions, ensuring scalable and cost-efficient cloud-based data handling',
        'Integrated real-time data synchronization between the mobile app and the backend through secure HTTP triggers and MongoDB'
      ]
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="portfolio-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="projects__card card">
              <div className="projects__card-header">
                <div className="projects__card-icon">
                  {project.icon}
                </div>
              </div>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-tech">{project.tech}</p>
              <div className="projects__card-description">
                <ul>
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
