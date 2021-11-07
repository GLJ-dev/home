import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import {HashRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
  <div className="App"> 
    aaaaaaaaaaaaaaaaaaaaaaaa
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/Timeline" exact component={Timeline} />
      </Switch>
    </Router>
    <Footer />
    
  </div>
  );
}

export default App;
