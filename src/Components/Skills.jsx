import { useState } from "react"
import '../App.css'


function Skills(){
    const [InputSkill, setInputSkill] = useState([]);
    const [OutputSkill, setOutputSkill] = useState([]);

    const AddExpFields = () => {
      setInputSkill([...InputSkill, { id: Date.now() }]);
      setOutputSkill([...OutputSkill, '']);
    }

    const handleSkillChange = (value, index) => {
        const updatedOutputSkillValues = [...OutputSkill];
        updatedOutputSkillValues[index] = value;
        setOutputSkill(updatedOutputSkillValues);
    };

    const deleteInputInputField = (index) => {
        const updatedInputSkillFields = InputSkill.filter((_, i) => i !== index);
        const updatedOutputSkillValues = OutputSkill.filter((_, i) => i !== index);
        setInputSkill(updatedInputSkillFields);
        setOutputSkill(updatedOutputSkillValues);
    
    };

    return(
        <div className='WorkExp'>
            <div className="ReadableSection">
                <div className="UserInfoText">Skills</div>
                <button onClick={AddExpFields} className='WorkExpBtn'>+ Add</button>
            </div>
                {InputSkill.map((field, index) => (
                    <div key={field.id}>
                        <SkillsInputFields 
                            onSkillChange={(value) => handleSkillChange(value, index)}
                            onExpDelete={() => deleteInputInputField(index)}
                        />
                    </div>
                ))} 
        </div>
    );
}

export default Skills

function SkillsInputFields({ onSkillChange , onExpDelete }) {
    const [Skill, setSkill] = useState('');

    const HandleSkillChange = (event) => {
        const SkillValue = event.target.value;
        setSkill(SkillValue);
        onSkillChange(SkillValue);
    };

    return (
        <div>
            <div className="WorkExpRowOne">
                <div className="SkillLayout">
                    <input 
                        className="WorkExpInput"
                        placeholder="Language or Technology"
                        value={Skill}
                        onChange={HandleSkillChange}
                    />
                    <button onClick={onExpDelete} className='DeleteBtnSkill'>Delete</button>
                </div>
            </div>
        </div>
    );
}