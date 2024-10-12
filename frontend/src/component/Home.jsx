import { faCode, faComputer, faShield, faShieldVirus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  { useEffect, useState } from 'react';
import { FlipWords } from "./ui/flip-words";

const Home = () => {

  const [showFeatures, setShowFeatures] = useState(false);

  // Function to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.querySelector('.features-section');
      if (featuresSection) {
        const sectionTop = featuresSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 200;
        if (sectionTop < triggerPoint) {
          setShowFeatures(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const words = ["Seamless", "Simplified", "Effortless"];


  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-content">
            <button className='b'><h1>
              <span className="code-icon">&lt;/&gt;</span> CodeCracker
            </h1></button>
            <h2>Code</h2>
            <h2 className='h2'><FlipWords words={words} /></h2>
            <p>
              CodeCracker simplifies coding with no setup, offering fast,
              effortless development with autocompletion.
            </p>
            <a href="/python-compiler" className="cta-button">
              Getting Started for free
            </a>
            <a href="/editor" className="secondary-button">
              Try our Editor
            </a>
          </div>
        </section>
      </main>

      <section className={`features-section ${showFeatures ? 'visible' : ''}`}>
        <h2>Key <span>Features</span></h2>
        <div className="features-grid">
          <div className="feature-box">
            <i className="icon-code">
            <FontAwesomeIcon icon={faCode}/>
            </i>
            <h3>Smart Code Editor</h3>
            <p>Speed up your workflow with real-time 
              code suggestions and auto-completion, 
              designed to enhance productivity.</p>
          </div>
          <div className="feature-box">
            <i className="icon-team">
            <FontAwesomeIcon icon={faUser}/>
            </i>
            <h3>Team Collaboration</h3>
            <p>Collaborate with your team in real-time, 
              making it easy to share ideas and code efficiently.</p>
          </div>
          <div className="feature-box">
            <i className="icon-lock">
            <FontAwesomeIcon icon={faShieldVirus}/>
            </i>
            <h3>Secure Login</h3>
            <p>Protect your account with advanced authentication 
              methods, ensuring your data remains safe and secure.</p>
          </div>
          <div className="feature-box">
            <i className="icon-output">
              <FontAwesomeIcon icon={faComputer}/>
            </i>
            <h3>Real-Time Output</h3>
            <p>See the results of your code instantly as you type,
              allowing for immediate feedback and quicker debugging.</p>
          </div>
        </div>
      </section>


      <footer>
        <p>&copy; 2024 Code Cracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
