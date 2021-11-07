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
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/Timeline" exact component={Timeline} />
      </Switch>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
