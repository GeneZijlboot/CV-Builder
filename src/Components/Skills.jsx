import { useState , useEffect } from "react"
import '../App.css'

function Skills({ SkillsChange }){
    const [SkillInputs, setSkillInputs] = useState([]);

    const AddSkillsInputs = () => {
        const newInputFields = [...SkillInputs];
        newInputFields.push({ Skills: ''});
        setSkillInputs(newInputFields);
    }

    const handleInputChange = (index, field, event) => {
        const newInputFields = [...SkillInputs];
        newInputFields[index][field] = event.target.value;
        setSkillInputs(newInputFields);
    }

    const removeInputFields = (index) => {
        const newInputFields = [...SkillInputs];
        newInputFields.splice(index, 1);
        setSkillInputs(newInputFields);
    }

    useEffect(() => {
        SkillsChange(SkillInputs);
    }, [SkillInputs, SkillsChange]);

    return( 
        <div className="WorkExp">
            <div className="ReadableSection">
                <div className="UserInfoText">Skills</div>
                <button onClick={AddSkillsInputs} className='WorkExpBtn'>+ Add</button>
            </div>
            {SkillInputs.map((SkillInputs, index) => (
            <div className="WorkExpRowOne" key={index}>
                <div>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={SkillInputs.Skills}
                        placeholder="enter Skill"
                        onChange={(event) => handleInputChange(index, 'Skills', event)}
                    />
                </div>
                <button className='DeleteBtnSkill' onClick={() => removeInputFields(index)}>Delete</button>
            </div>
            ))}
        </div>
    );
}

export default Skills;