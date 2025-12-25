import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="portfolio-container">
        <h2 className="section-title">Education</h2>
        <div className="education__content">
          <div className="education__card card">
            <div className="education__card-icon">
              <GraduationCap size={40} />
            </div>
            <h3 className="education__card-degree">Bachelor of Engineering</h3>
            <p className="education__card-major">Mechatronics</p>
            <p className="education__card-school">Bannari Amman Institute of Technology</p>
            <p className="education__card-period">August 2015 - April 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
