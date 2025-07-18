import './App.css';
import React from 'react';
import Navigation from './assets/pages/Navigation';
import Hero from './assets/pages/Hero';
import ScrollDown from './assets/pages/ScrollDown';
import Biography from './assets/pages/Biography';
import MyWork from './assets/pages/MyWork';
// import Projects from './assets/pages/Projects';
import SkillsAndEducation from './assets/pages/SkillsAndEducation';
import ContactMe from './assets/pages/ContactMe';
import { Footer } from './assets/pages/Footer';
import WebUpgrades from './assets/pages/WebUpgrades';
import PreMyWork from './assets/pages/PreMyWork';
import FeaturedPost from './assets/pages/FeaturedPost';

function App() {
  return (
    <div>
      {/* <WebUpgrades /> */}
      <Navigation />
      <Hero />
      <ScrollDown />
      <Biography />
      <PreMyWork />
      <MyWork />
      <SkillsAndEducation />
      <FeaturedPost />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
;
