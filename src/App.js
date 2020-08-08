import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavTabs from './components/NavTabs';
// import Footer from'./components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <NavTabs />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </div>
       {/* <Footer /> */}
    </Router>

  );
}

export default App;
