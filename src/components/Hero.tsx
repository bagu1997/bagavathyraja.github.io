import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Bagavathy Raja</h1>
        <h2 className="hero__title">Backend Software Engineer</h2>
        <p className="hero__subtitle">
          Specializing in Java, Spring Boot, Microservices, and Cloud APIs.
          Building scalable REST APIs and cloud-native backend services with 3+ years of engineering experience.
        </p>
        <div className="hero__cta">
          <button
            className="btn-primary-custom"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          <button
            className="btn-primary-custom"
            onClick={() => scrollToSection('experience')}
          >
            View Experience
          </button>
        </div>
        <div style={{ marginTop: '3rem', cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
