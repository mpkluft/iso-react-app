import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/app.css';           // <-- импорт стилей

render(
  <App />,
  document.getElementById('root')
)