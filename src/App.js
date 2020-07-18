import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'

function App(props) {
  return (
   <HashRouter>
    <div className="App">
   <Header 
     history={props.location}
     />
     <div id='routes' >
{routes}
</div>
    </div></HashRouter>
  );
}

export default App;
