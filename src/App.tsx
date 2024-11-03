import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TranslationDashboard from './components/TranslationDashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <TranslationDashboard />
      <Footer />
    </div>
  );
}

export default App;