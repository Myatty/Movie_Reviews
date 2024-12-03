import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import AddReview from './components/add-review';
import Movie from './components/movie';
import MoviesList from './components/movies-list';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  async function Login(user = null){
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/movies">Movies</Link>
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <a onClick={logout}>Logout</a>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
      </div>
    </Router>
  );
}

export default App;
