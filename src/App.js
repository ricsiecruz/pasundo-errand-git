import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Link, Route, Routes, Switch } from 'react-router-dom';

import Account from './components/account';
import Home from './components/home';
import Login from './components/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
