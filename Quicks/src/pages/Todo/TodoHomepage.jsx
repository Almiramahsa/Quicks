import './assets/css/app.css';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

function TodoHomepage() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <Container>
        <button type="button" onClick={() => setIsHidden(!isHidden)} className="button button--primary">
          Toggle Button
        </button>
        {!isHidden && <button>Hidden Button</button>}

        <AppHeader />
        <AppContent />
      </Container>
      <Toaster></Toaster>
    </>
  );
}

export default TodoHomepage;
