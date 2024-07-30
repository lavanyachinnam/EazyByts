import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsFeed from '../components/NewsFeed';
import './App.css'; // Optional: for additional styling

const App = () => {
    return (
        <div className="app">
            <Header />
            <NewsFeed />
            <Footer />
        </div>
    );
};

export default App;
