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

function App() {
  return (
    <GlobalProvider>
      <Content />
      <ToastContainer />
    </GlobalProvider>
  );
}

export default App;
