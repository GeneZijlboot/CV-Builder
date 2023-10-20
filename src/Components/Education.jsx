import { useState , useEffect } from "react"
import '../App.css'

function Education({ EducChange }){
    const [EducInputs, setEducInputs] = useState([]);

    const AddEducInputs = () => {
        const newInputFields = [...EducInputs];
        newInputFields.push({ School: '', Degree: '', EducFrom: '', EducTo: ''});
        setEducInputs(newInputFields);
    }

    const handleInputChange = (index, field, event) => {
        const newInputFields = [...EducInputs];
        newInputFields[index][field] = event.target.value;
        setEducInputs(newInputFields);
    }

    const removeInputFields = (index) => {
        const newInputFields = [...EducInputs];
        newInputFields.splice(index, 1);
        setEducInputs(newInputFields);
    }

    useEffect(() => {
        EducChange(EducInputs);
    }, [EducInputs, EducChange]);

    return( 
        <div className="WorkExp">
            <div className="ReadableSection">
                <div className="UserInfoText">Education</div>
                <button onClick={AddEducInputs} className='WorkExpBtn'>+ Add</button>
            </div>
            {EducInputs.map((EducInputs, index) => (
            <div className="WorkExpRowOne" key={index}>
                <div>
                    <label className="WorkExpTxt">School/University:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={EducInputs.School}
                        placeholder="enter School/University name"
                        onChange={(event) => handleInputChange(index, 'School', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">Degree:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={EducInputs.Degree}
                        placeholder="enter Degree"    
                        onChange={(event) => handleInputChange(index, 'Degree', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">From:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={EducInputs.EducFrom}
                        placeholder="From"
                        onChange={(event) => handleInputChange(index, 'EducFrom', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">To:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={EducInputs.EducTo}
                        placeholder="To"
                        onChange={(event) => handleInputChange(index, 'EducTo', event)}
                    />
                </div>
                <button className='DeleteBtn' onClick={() => removeInputFields(index)}>Delete</button>
            </div>
            ))}
        </div>
    );
}

export default Education;