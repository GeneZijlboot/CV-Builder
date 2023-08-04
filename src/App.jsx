 //importing Styling
import './App.css'

 //importing Components
import Copyright from './components/Questions/Copyright/Copyright.jsx';
import PersonalData from './components/Questions/PersonalData/PersonalData.jsx';
import WorkExp from './components/Questions/WorkExp/WorkExp.jsx';

function App() {
  return (
    <>
      <div className='LeftSide'>
        <Copyright />
        <PersonalData />
        <WorkExp />
      </div>
    </>
  )
}

export default App;