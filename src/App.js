import React from 'react';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className='links' to='login'>Login</Link>
        <Link className='links' to='friends'>Friends List</Link>
        <Link className='links' to='friends/add'>Add Friend</Link>
        <Link className='links' to='logout'>Logout</Link>
      </header>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/friends' element={<FriendsList />} />
          <Route path='/friends/add' element={<AddFriends />} />
          <Route path='/logout' element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route path='/login' element={<Login />} />
        <Route path='/friends' element={<FriendsList />} />
        <Route path='/friends/add' element={<AddFriends />} />
        <Route path='/logout' element={<Logout />} /> */}