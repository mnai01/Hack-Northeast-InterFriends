import React, { Component, useState, useMemo } from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Content from './Content';
import { ToastContainer, toast } from 'react-toastify';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Button } from 'reactstrap';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const handlerDarkmode = () => {
    setDarkmode(!darkmode);
  };

  const mode = darkmode ? 'dark-mode' : '';
  return (
    <div className={mode}>
      <GlobalProvider>
        <Content />
        <ToastContainer />
      </GlobalProvider>
      <Button onClick={handlerDarkmode}>This is for josh</Button>
    </div>
  );
}

export default App;
