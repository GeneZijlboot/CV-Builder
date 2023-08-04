import { useState } from 'react'
import './App.css' //importing Styling
import Copyright from './components/Questions/Copyright/Copyright.jsx';
import PersonalData from './components/Questions/PersonalData/PersonalData.jsx';

function App() {
  return (
    <>
      <div className='LeftSide'>
        <Copyright />
        <PersonalData />
      </div>
    </>
  )
}

export default App;