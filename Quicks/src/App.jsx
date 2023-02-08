import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Messager/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './pages/Messager/Dashboard';
import TodoHomepage from '../src/pages/Todo/TodoHomepage';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import Mainpage from './pages/Mainpage';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Mainpage />} />
        <Route path="/login" exact element={<Login onIdSubmit={setId} />} />
        <Route path="/dashboard" element={dashboard} />
        <Route path="/task" element={<TodoHomepage />} />
      </Routes>
      <Toaster></Toaster>
    </BrowserRouter>
  );
}

export default App;
