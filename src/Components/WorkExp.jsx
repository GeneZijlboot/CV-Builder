import { useState } from "react"
import '../App.css'


function WorkExp(){
    const [InputCompany, setInputCompany] = useState([]);
    const [OutputCompany, setOutputCompany] = useState([]);
  
    const [InputPosition, setInputPosition] = useState([]);
    const [OutputPosition, setOutputPosition] = useState([]);

    const [InputFrom, setInputFrom] = useState([]);
    const [OutputFrom, setOutputFrom] = useState([]);

    const [InputTo, setInputTo] = useState([]);
    const [OutputTo, setOutputTo] = useState([]);
  
    const AddExpFields = () => {
      setInputCompany([...InputCompany, { id: Date.now() }]);
      setOutputCompany([...OutputCompany, '']);
      setInputPosition([...InputPosition, { id: Date.now() }]);
      setOutputPosition([...OutputPosition, '']);
      setInputFrom([...InputFrom, { id: Date.now() }]);
      setOutputFrom([...OutputFrom, '']);
      setInputTo([...InputTo, { id: Date.now() }]);
      setOutputTo([...OutputTo, '']);
    }

    const handleCompanyChange = (value, index) => {
        const updatedOutputCompanyValues = [...OutputCompany];
        updatedOutputCompanyValues[index] = value;
        setOutputCompany(updatedOutputCompanyValues);
    };

    const handlePositionChange = (value, index) => {
        const updatedOutputPositionValues = [...OutputPosition];
        updatedOutputPositionValues[index] = value;
        setOutputPosition(updatedOutputPositionValues);
    };
    
    const handleFromChange = (value, index) => {
        const updatedOutputFromValues = [...OutputFrom];
        updatedOutputFromValues[index] = value;
        setOutputFrom(updatedOutputFromValues);
    };
    const handleToChange = (value, index) => {
        const updatedOutputToValues = [...OutputTo];
        updatedOutputToValues[index] = value;
        setOutputTo(updatedOutputToValues);
    };

    const deleteInputInputField = (index) => {
        const updatedInputComapnyFields = InputCompany.filter((_, i) => i !== index);
        const updatedOutputCompanyValues = OutputCompany.filter((_, i) => i !== index);
        setInputCompany(updatedInputComapnyFields);
        setOutputCompany(updatedOutputCompanyValues);
    
        const updatedInputPositionFields = InputPosition.filter((_, i) => i !== index);
        const updatedOutputPositionValues = OutputPosition.filter((_, i) => i !== index);
        setInputPosition(updatedInputPositionFields);
        setOutputPosition(updatedOutputPositionValues);

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
                <div className="UserInfoText">Experience</div>
                <button onClick={AddExpFields} className='WorkExpBtn'>+ Add</button>
            </div>
                {InputCompany.map((field, index) => (
                    <div key={field.id}>
                        <WorkExpInputFields 
                            onCompanyChange={(value) => handleCompanyChange(value, index)}
                            onPositionChange={(value) => handlePositionChange(value, index)}
                            onFromChange={(value) => handleFromChange(value, index)}
                            onToChange={(value) => handleToChange(value, index)}
                            onExpDelete={() => deleteInputInputField(index)}
                        />
                    </div>
                ))} 
        </div>
    );
}

export default WorkExp

function WorkExpInputFields({ onCompanyChange , onPositionChange , onFromChange , onToChange ,onExpDelete }) {
    const [Company, setCompany] = useState('');
    const [Position, setPosition] = useState('');
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
  
    const HandleCompanyChange = (event) => {
      const CompanyValue = event.target.value;
      setCompany(CompanyValue);
      onCompanyChange(CompanyValue);
    };
  
    const HandlePositionChange = (event) => {
      const PositionValue = event.target.value;
      setPosition(PositionValue);
      onPositionChange(PositionValue);
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
                    <label className="WorkExpTxt">Company:</label>
                    <input 
                        className="WorkExpInput"
                        placeholder="enter Company name"
                        value={Company}
                        onChange={HandleCompanyChange}
                    />
                </div>
                <div>
                    <label className="WorkExpTxt">Position:</label>
                    <input 
                        className="WorkExpInput"
                        placeholder="enter Position"
                        value={Position}
                        onChange={HandlePositionChange}
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