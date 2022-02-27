import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchUserById } from './redux/apiSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserById())
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
