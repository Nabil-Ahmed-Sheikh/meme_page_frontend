import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import StatsScreen from './screens/StatsScreen';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/stats" component={StatsScreen} exact />
      </main>
      
    </Router>
  );
}

export default App;
