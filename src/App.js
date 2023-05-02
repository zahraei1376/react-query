import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RQSuperHeroes from './pages/RQSuperheroes';
import SuperHeroes from './pages/Superheroes';
import { QueryClientProvider, QueryClient } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
