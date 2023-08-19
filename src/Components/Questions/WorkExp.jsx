import AddExperienceButton from "../assets/AddExperienceButton";

export default function WorkExp(){
    return (
        <div className="WorkExp">
            <div className="WorkExpVisible">
                <p className="WorkExperienceText">Work Experience</p>
                <button onClick={AddExperienceButton} className="AddWorkExp">+ Experience</button>
            </div>
            <div className="WorkExpQuestionForm">
                <div className="WorkExpNames">
                    <div>
                        <p className="WorkExpRowtext">Company Name</p>
                        <input type="text" name="Company" id="Company" placeholder="enter Company Name" required/>
                    </div>
                    <div>
                        <p className="WorkExpRowtext">Position Title</p>
                        <input type="text" name="Position" id="Position" placeholder="enter Position Title" required/>
                    </div>
                </div>
                <div className="WorkExpDates">
                    <div>
                        <p className="WorkExpRowtext">Start Date</p>
                        <input type="date" name="Position" id="Date"required/>
                    </div>
                    <div>
                        <p className="WorkExpRowtext">End Date</p>
                        <input type="date" name="Position" id="Date"required/>
                    </div>
                </div>
                <p className="WorkExpRowtext">Location</p>
                <input type="text" name="Location" id="Location" className="WorkExpLocation" placeholder="enter Location"required/>
                <p className="WorkExpRowtext">Description</p>
                <textarea type="text" name="Description" id="Description" className="WorkExpDescription" placeholder="enter Description"required />
            </div>
        </div>
    )
}