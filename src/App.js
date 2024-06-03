import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import './components/App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="header">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
