import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import './App.css'
import {action,orginals} from './url'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals} title='Netflix Orginals'/>
       <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
