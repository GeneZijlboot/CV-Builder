import { useState } from "react"
import '../App.css'


function WorkExp({ onCompany , onPosition , onFrom , onTo , onExpDelete , onExpSubmit }){
    const [Company, setCompany] = useState('');
    const [Position, setPosition] = useState('');
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');

    const HandleCompany = (event) => {
        const CompanyValue = event.target.value;
        setCompany(CompanyValue);
        onCompany(CompanyValue);
      };
    
    const HandlePosition = (event) => {
        const PositionValue = event.target.value;
        setPosition(PositionValue);
        onPosition(PositionValue);
    };

    const HandleFrom = (event) => {
        const FromValue = event.target.value;
        setFrom(FromValue);
        onFrom(FromValue);
      };
    
    const HandleTo = (event) => {
        const ToValue = event.target.value;
        setTo(ToValue);
        onTo(ToValue);
    };

    
    
    return( 
        <div className='WorkExp'>
            <div className="WorkExpA">
                <div className="UserInfoText">Experience</div>
                <button onClick={onExpSubmit} className='WorkExpBtn'>+ Add</button>
            </div>
            <div>
                <div className="WorkExpRowOne">
                    <div>
                        <label className="WorkExpTxt">Company:</label>
                        <input 
                            className="WorkExpInput"
                            placeholder="enter Company name"
                            value={Company}
                            onChange={HandleCompany}
                        />
                    </div>
                    <div>
                        <label className="WorkExpTxt">Position:</label>
                        <input 
                            className="WorkExpInput"
                            placeholder="enter Position"
                            value={Position}
                            onChange={HandlePosition}
                        />
                    </div>
                    <div>
                        <label className="WorkExpTxt">From:</label>
                        <input
                            type="number"
                            className="WorkExpInput"
                            placeholder="From"
                            value={From}
                            onChange={HandleFrom}
                        />
                    </div>
                    <div>
                        <label className="WorkExpTxt">To:</label>
                        <input
                            type="number"
                            className="WorkExpInput"
                            placeholder="To"
                            value={To}
                            onChange={HandleTo}
                        />
                    </div>
                    <button onClick={onExpDelete} className='DeleteBtn'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default WorkExp

