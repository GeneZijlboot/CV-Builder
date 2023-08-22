import AddEducationButton from "../assets/AddEducationButton";

export default function Education(){
    return (
        <div className="Education">
            <div className="EducationVisible">
                <p className="EducationText">Education</p>
                <button onClick={AddEducationButton} className="AddEducation">+ Education</button>
            </div>
            <div className="EducationQuestionForm">
                
            </div>
        </div>
    )
}