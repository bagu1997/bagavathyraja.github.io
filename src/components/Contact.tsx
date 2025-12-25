import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'bagavathyraja2nov@gmail.com',
      href: 'mailto:bagavathyraja2nov@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 7639708437',
      href: 'tel:+917639708437'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Chennai, India',
      href: null
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bagavathyraja',
      href: 'https://linkedin.com/in/bagavathyraja'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="portfolio-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact__content">
          <p className="contact__intro">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact__links">
            {contactLinks.map((link, index) => (
              link.href ? (
                <a
                  key={index}
                  href={link.href}
                  className="contact__link card"
                  target={link.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={link.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__link-icon">{link.icon}</div>
                  <p className="contact__link-label">{link.label}</p>
                  <p className="contact__link-value">{link.value}</p>
                </a>
              ) : (
                <div key={index} className="contact__link card">
                  <div className="contact__link-icon">{link.icon}</div>
                  <p className="contact__link-label">{link.label}</p>
                  <p className="contact__link-value">{link.value}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Bagavathy Raja. Built with React, LESS, and Bootstrap.</p>
      </footer>
    </section>
  );
};

export default Contact;
