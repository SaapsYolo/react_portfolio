import './App.css';
import React from 'react';
import Navigation from './assets/pages/Navigation';
import Hero from './assets/pages/Hero';
import Biography from './assets/pages/Biography';
import MyWork from './assets/pages/MyWork';
import Projects from './assets/pages/Projects';
import SkillsAndEducation from './assets/pages/SkillsAndEducation';
import ContactMe from './assets/pages/ContactMe';
import { Footer } from './assets/pages/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Biography />
      <MyWork />
      <SkillsAndEducation />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
;
