import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
  <div className="App"> 
    <Router>
      <Navbar />
      <Home />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Timeline" exact component={Timeline} />
      </Switch>
    </Router>
    <Footer />
    
  </div>
  );
}

export default App;
