import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col font-serif bg-gray">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;