import Copyright from "./Components/Copyright";
import PersonalData from './Components/PersonalData';
import Skills from "./Components/Skills";
import WorkExp from "./Components/WorkExp";
import Education from "./Components/Education";

function Questions({ fnameChange , AdressChange , PhoneChange , EmailChange , DescriptionChange , WorkExpChange , SkillsChange , EducChange}){
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
                WorkExpChange={WorkExpChange}
            />
            <Skills 
                SkillsChange={SkillsChange}
            />
            <Education
                EducChange={EducChange}
            />
        </div>
    )
}

export default Questions;