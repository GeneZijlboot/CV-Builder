import Copyright from "./Components/Copyright";
import PersonalData from './Components/PersonalData';
import Skills from "./Components/Skills";
import WorkExp from "./Components/WorkExp";
import Education from "./Components/Education";

function Questions({ fnameChange , AdressChange , PhoneChange , EmailChange , DescriptionChange , Company , Position , ExpFrom , ExpTo , Skill , School , Degree , EducFrom , EducTo }){
    return (
        <div className="Questions">
            <Copyright />
            <PersonalData 
                fnameChange={fnameChange}
                AdressChange={AdressChange} 
                PhoneChange={PhoneChange} 
                EmailChange={EmailChange} 
                DescriptionChange={DescriptionChange}
            />
            <WorkExp 
                Company={Company}
                Position={Position}
                ExpFrom={ExpFrom}
                ExpTo={ExpTo}
            />
            <Skills 
                Skill={Skill}
            />
            <Education 
                School={School}
                Degree={Degree}
                EducFrom={EducFrom}
                EducTo={EducTo}
            />
        </div>
    )
}

export default Questions;