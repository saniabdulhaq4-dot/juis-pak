import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadershipTimeline from './pages/partyMembers/LeadershipTimeline';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Leadership from './pages/about/Leadership';
import PartyMembers from './pages/partyMembers/PartyMembers';
import UnderConstruction from './components/UnderConstruction';
import ManshoorJuiSFull from './pages/manshoor/ManshoorJuiSFull';
import HomeDastoorInfoFull from './pages/about/HomeDastoorInfoFull';
import Home from './pages/Home';
import './App.css';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col urdu-font" dir="rtl">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/founder" element={<Leadership />} />
            <Route path="/leadership" element={<PartyMembers />} />
            <Route path="/leadership/workers" element={<PartyMembers />} />
            <Route path="/leadership/main" element={<LeadershipTimeline />} />
            <Route path="/manifesto" element={<ManshoorJuiSFull />} />
            <Route path="/about/history" element={<HomeDastoorInfoFull />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/news" element={<UnderConstruction />} />
            <Route path="/gallery" element={<UnderConstruction />} />
            <Route path="/join" element={<UnderConstruction />} />
            <Route path="/donate" element={<UnderConstruction />} />
            <Route path="/*" element={<UnderConstruction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;