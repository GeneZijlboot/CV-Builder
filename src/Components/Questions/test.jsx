            {/* from this till */}
            <div className="EducationQuestionForm">
                <div className="EducationNames">
                    <div>
                        <p className="EducationRowtext">School</p>
                        <input type="text" name="School" id="School" placeholder="enter School name" required/>
                    </div>
                    <div>
                        <p className="EducationRowtext">Degree</p>
                        <input type="text" name="Degree" id="Degree" placeholder="enter Degree" required/>
                    </div>
                </div>
                <div className="WorkExpDates">
                    <div>
                        <p className="EducationRowtext">Start Date</p>
                        <input type="date" name="Position" id="Date"required/>
                    </div>
                    <div>
                        <p className="EducationRowtext">End Date</p>
                        <input type="date" name="Position" id="Date"required/>
                    </div>
                </div>
                <p className="EducationRowtext">Location</p>
                <input type="text" name="Location" id="Location" className="WorkExpLocation" placeholder="enter Location"required/>
            </div>
            {/* Here needs to be submitted when clicking the button "onclick event works btw" */}