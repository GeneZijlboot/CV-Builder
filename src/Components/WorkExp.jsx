import { useState , useEffect } from "react"
import '../App.css'


function WorkExp({ onInputValuesChange }){
    const [WorkExpInputs, setWorkExpInputs] = useState([]);

    const AddWorkExpInputs = () => {
        const newInputFields = [...WorkExpInputs];
        newInputFields.push({ Company: '', Position: '', WorkExpFrom: '', WorkExpTo: ''});
        setWorkExpInputs(newInputFields);
    }

    const handleInputChange = (index, field, event) => {
        const newInputFields = [...WorkExpInputs];
        newInputFields[index][field] = event.target.value;
        setWorkExpInputs(newInputFields);
    }

    const removeInputFields = (index) => {
        const newInputFields = [...WorkExpInputs];
        newInputFields.splice(index, 1);
        setWorkExpInputs(newInputFields);
    }

    useEffect(() => {
        onInputValuesChange(WorkExpInputs);
    }, [WorkExpInputs, onInputValuesChange]);

    return( 
        <div className="WorkExp">
            <div className="ReadableSection">
                <div className="UserInfoText">Experience</div>
                <button onClick={AddWorkExpInputs} className='WorkExpBtn'>+ Add</button>
            </div>
            {WorkExpInputs.map((WorkExpInputs, index) => (
            <div className="WorkExpRowOne" key={index}>
                <div>
                    <label className="WorkExpTxt">Company:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={WorkExpInputs.Company}
                        placeholder="enter Company name"
                        onChange={(event) => handleInputChange(index, 'Company', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">Position:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={WorkExpInputs.Position}
                        placeholder="enter Position"    
                        onChange={(event) => handleInputChange(index, 'Position', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">From:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={WorkExpInputs.WorkExpFrom}
                        placeholder="From"
                        onChange={(event) => handleInputChange(index, 'WorkExpFrom', event)}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">To:</label>
                    <input
                        className="WorkExpInput"
                        type="text"
                        value={WorkExpInputs.WorkExpTo}
                        placeholder="To"
                        onChange={(event) => handleInputChange(index, 'WorkExpTo', event)}
                    />
                </div>
                <button className='DeleteBtn' onClick={() => removeInputFields(index)}>Delete</button>
            </div>
            ))}
        </div>
    );
}

export default WorkExp