import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Names from './components/app/App';
import NewName from './components/secApp/Apptwo';


ReactDOM.render(
  <React.StrictMode>
    <Names />
    <NewName />
     </React.StrictMode>,
  document.getElementById('root')
);
