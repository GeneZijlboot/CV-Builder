//importing Components
import Questions from "./Components/Questions/Questions.jsx";
import ResumeResults from "./Components/ResumeResults/ResumeResults.jsx";

//importing stylesheet
import './App.css'

function App() {
  return (
      <div className='App'>
        <Questions />
        <ResumeResults />
      </div>
  )
}

export default App;