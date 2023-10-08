import Copyright from "./Components/Copyright";
import PersonalData from './Components/PersonalData';
import Skills from "./Components/Skills";
import WorkExp from "./Components/WorkExp";
import Education from "./Components/Education";

function Questions({ fnameChange , AdressChange , PhoneChange , EmailChange }){
    return (
        <div className="Questions">
            <Copyright />
            <PersonalData 
                fnameChange={fnameChange}
                AdressChange={AdressChange} 
                PhoneChange={PhoneChange} 
                EmailChange={EmailChange} 
            />
            <WorkExp />
            <Skills />
            <Education />
        </div>
    )
}

export default Questions;