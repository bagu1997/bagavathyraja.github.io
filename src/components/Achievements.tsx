import { Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements">
      <div className="portfolio-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements__content">
          <div className="achievements__card card">
            <div className="achievements__card-icon">
              <Award size={40} />
            </div>
            <h3 className="achievements__card-title">Rising Star of the Year</h3>
            <p className="achievements__card-period">January 2023 - August 2024</p>
            <p className="achievements__card-description">
              Awarded "Rising Star of the Year" at Diligent Squad Technologies for exceptional
              contributions in software development, debugging, and optimizing system performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
