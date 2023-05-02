import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RQSuperHeroes from './pages/RQSuperheroes';
import SuperHeroes from './pages/Superheroes';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/super-heroes" element={<SuperHeroes />} />
          <Route exact path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route exact path="/" element={<Home />} />
          {/* <Route path='/super-heroes'>
            <SuperHeroes />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroes />
          </Route>
          <Route path='/'>
            <Home />
          </Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
