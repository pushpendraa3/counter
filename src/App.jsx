import './App.css';
import Counter from './components/Counter';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';

function App() {
  return (
    <>
    <div>

       <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <Link to="/counter">Counter</Link>
       </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/blog' element={ <Blog />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/counter' element={ <Counter />} />
      </Routes>
    </div>

    </>
   
  );
}

export default App;
