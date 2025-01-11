import React from 'react';
import Navbar from './components/navbar.js';
import HeroSection from './components/herosection.js';
import TrendingCoins from './components/trendingcoin.js';
import Performance from './components/performance.js';
import Sentiment from './components/sentiment.js';
import AboutSection from './components/aboutsection.js';
import Tokenomics from './components/tokenomics.js';
import TeamMembers from './components/teamMember.js';
// import Suggestions from './components/suggestions.js';
import YouMayAlsoLike from './components/youmaylike.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <TrendingCoins />
      </div>
      <Performance />
      <Sentiment />
      <AboutSection />
      <Tokenomics />
      <TeamMembers />
      <YouMayAlsoLike />
    </div>
  );
};

export default App;
