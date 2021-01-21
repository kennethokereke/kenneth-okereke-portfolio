
import React from 'react'
import {Router} from 'react-router-dom'
import ContentWrapper from './Component/ContentWrapper';
import Navbar from './Component/Navbar';
import History from './History';
import './stylesheet/App.css'


class App extends React.Component {
  render() {
     return (
        <div id="App">
           <Router history={History}>
              <Navbar/>
              <ContentWrapper/>
           </Router>
        </div>
     );
  }
}

export default App;

