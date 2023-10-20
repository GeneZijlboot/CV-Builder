import { useState } from "react"
import '../App.css'

function Education({ School , Degree , EducFrom , EducTo}){
    const [InputSchool, setInputSchool] = useState([]);
    const [OutputSchool, setOutputSchool] = useState([]);
  
    const [InputDegree, setInputDegree] = useState([]);
    const [OutputDegree, setOutputDegree] = useState([]);

    const [InputFrom, setInputFrom] = useState([]);
    const [OutputFrom, setOutputFrom] = useState([]);

    const [InputTo, setInputTo] = useState([]);
    const [OutputTo, setOutputTo] = useState([]);
  
    const AddExpFields = () => {
      setInputSchool([...InputSchool, { id: Date.now() }]);
      setOutputSchool([...OutputSchool, '']);
      setInputDegree([...InputDegree, { id: Date.now() }]);
      setOutputDegree([...OutputDegree, '']);
      setInputFrom([...InputFrom, { id: Date.now() }]);
      setOutputFrom([...OutputFrom, '']);
      setInputTo([...InputTo, { id: Date.now() }]);
      setOutputTo([...OutputTo, '']);
    }

    const handleSchoolChange = (value, index) => {
        const updatedOutputSchoolValues = [...OutputSchool];
        updatedOutputSchoolValues[index] = value;
        setOutputSchool(updatedOutputSchoolValues);
        School(updatedOutputSchoolValues);
    };

    const handleDegreeChange = (value, index) => {
        const updatedOutputDegreeValues = [...OutputDegree];
        updatedOutputDegreeValues[index] = value;
        setOutputDegree(updatedOutputDegreeValues);
        Degree(updatedOutputDegreeValues);
    };
    
    const handleFromChange = (value, index) => {
        const updatedOutputFromValues = [...OutputFrom];
        updatedOutputFromValues[index] = value;
        setOutputFrom(updatedOutputFromValues);
        EducFrom(updatedOutputFromValues);
    };
    const handleToChange = (value, index) => {
        const updatedOutputToValues = [...OutputTo];
        updatedOutputToValues[index] = value;
        setOutputTo(updatedOutputToValues);
        EducTo(updatedOutputToValues);
    };

    const deleteInputInputField = (index) => {
        const updatedInputSchoolFields = InputSchool.filter((_, i) => i !== index);
        const updatedOutputSchoolValues = OutputSchool.filter((_, i) => i !== index);
        setInputSchool(updatedInputSchoolFields);
        setOutputSchool(updatedOutputSchoolValues);
    
        const updatedInputDegreeFields = InputDegree.filter((_, i) => i !== index);
        const updatedOutputDegreeValues = OutputDegree.filter((_, i) => i !== index);
        setInputDegree(updatedInputDegreeFields);
        setOutputDegree(updatedOutputDegreeValues);

        const updatedInputFromFields = InputFrom.filter((_, i) => i !== index);
        const updatedOutputFromValues = OutputFrom.filter((_, i) => i !== index);
        setInputFrom(updatedInputFromFields);
        setOutputFrom(updatedOutputFromValues);

        const updatedInputToFields = InputTo.filter((_, i) => i !== index);
        const updatedOutputToValues = OutputTo.filter((_, i) => i !== index);
        setInputTo(updatedInputToFields);
        setOutputTo(updatedOutputToValues);
    };

    return(
        <div className='WorkExp'>
            <div className="ReadableSection">
                <div className="UserInfoText">Education</div>
                <button onClick={AddExpFields} className='WorkExpBtn'>+ Add</button>
            </div>
                {InputSchool.map((field, index) => (
                    <div key={field.id}>
                        <EducationInputFields 
                            onSchoolChange={(value) => handleSchoolChange(value, index)}
                            onDegreeChange={(value) => handleDegreeChange(value, index)}
                            onFromChange={(value) => handleFromChange(value, index)}
                            onToChange={(value) => handleToChange(value, index)}
                            onExpDelete={() => deleteInputInputField(index)}
                        />
                    </div>
                ))} 
        </div>
    );
}

export default Education

function EducationInputFields({ onSchoolChange , onDegreeChange , onFromChange , onToChange ,onExpDelete }) {
    const [School, setSchool] = useState('');
    const [Degree, setDegree] = useState('');
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
  
    const HandleSchoolChange = (event) => {
      const SchoolValue = event.target.value;
      setSchool(SchoolValue);
      onSchoolChange(SchoolValue);
    };
  
    const HandleDegreeChange = (event) => {
      const DegreeValue = event.target.value;
      setDegree(DegreeValue);
      onDegreeChange(DegreeValue);
    };
  
    const HandleFromChange = (event) => {
        const FromValue = event.target.value;
        setFrom(FromValue);
        onFromChange(FromValue);
    };

    const HandleToChange = (event) => {
        const ToValue = event.target.value;
        setTo(ToValue);
        onToChange(ToValue);
    };

    return (
        <div>
            <div className="WorkExpRowOne">
                <div>
                    <label className="WorkExpTxt">School/University:</label>
                    <input 
                        className="WorkExpInput"
                        placeholder="enter School/University name"
                        value={School}
                        onChange={HandleSchoolChange}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">Degree:</label>
                    <input 
                        className="WorkExpInput"
                        placeholder="enter Degree"
                        value={Degree}
                        onChange={HandleDegreeChange}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">From:</label>
                    <input
                        type="number"
                        className="WorkExpInput"
                        placeholder="From"
                        value={From}
                        onChange={HandleFromChange}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">To:</label>
                    <input
                        type="number"
                        className="WorkExpInput"
                        placeholder="To"
                        value={To}
                        onChange={HandleToChange}
                    />
                </div>
                <button onClick={onExpDelete} className='DeleteBtn'>Delete</button>
            </div>
        </div>
    );
}