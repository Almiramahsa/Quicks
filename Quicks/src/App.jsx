import React from 'react';
import Login from './pages/Messager/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './pages/Messager/Dashboard';

function App() {
  const [id, setId] = useLocalStorage('id');

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
