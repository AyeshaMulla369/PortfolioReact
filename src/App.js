import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cards from './components/Home/Cards';
import Experience from './components/Home/Experience';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Cards}/>
          <Route path='/experience' exact Component={Experience}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
