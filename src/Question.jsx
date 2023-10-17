import Copyright from "./Components/Copyright";
import PersonalData from './Components/PersonalData';
import Skills from "./Components/Skills";
import WorkExp from "./Components/WorkExp";
import Education from "./Components/Education";

function Questions({ fnameChange , AdressChange , PhoneChange , EmailChange , DescriptionChange , onCompany , onPosition , onFrom , onTo }){
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
                onCompany={onCompany}
                onPosition={onPosition}
                onFrom={onFrom}
                onTo={onTo}
            />
            <Skills />
            <Education />
        </div>
    )
}

export default Questions;