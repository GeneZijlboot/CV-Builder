import AddSkills from "../assets/AddSkillsButton";

export default function Skills(){
    return (
        <div className="Skills">
            <div className="SkillsVisible">
                <p className="SkillsText">Skills</p>
                <button onClick={AddSkills} className="AddSkills">+ Skills</button>
            </div>
            <p className="SkillsRowtext">Skill</p>
            <input type="text" name="Location" id="Location" className="WorkExpLocation" placeholder="enter Skill"required/>
        </div>
    )
}