import { useState } from "react";
import './Everything.css'

function Questions() {
    const[Fname, setFname] = useState('');
    const[Lname, setLname] = useState('');

    function handleChangeFname(e){
        setFname(e.target.value)
    }
    function handleChangeLname(e){
        setLname(e.target.value)
    }

    return (
        <>  
            <div className="Container">
                <div className='Questions'>
                    {/*Copyright Section*/}
                    <div className='CopyrightSection'>
                        <div className="text1">
                            <p>CV-Builder</p>
                            <button>Save</button>
                        </div>
                        <div id="MadeBy">
                            <a href="https://github.com/GeneZijlboot/CV-Builder">Copyright © Gene Zijlmans</a>
                        </div>
                    </div>

                    {/*PersonalData Section*/}
                    <div className='PersonalDataSection'>
                        <p className='text2'>Personal Data</p>
                        <div className="Initials">
                            <input  
                            onChange={handleChangeFname}
                            />
                            <input
                            placeholder="LastName"
                            onChange={handleChangeLname}
                            />
                        </div>
                        <input className='Niche' placeholder='Niche: Software Developer' />
                        <br />
                        <input  className='Info' placeholder='Something about yourself... ' />
                    </div>

                    {/*WorkExp Section*/}
                    <div className='WorkExpSection'>
                    <p className='text3'>Work Experience</p>
                        <div className='Card'>

                        </div>
                        <button className='JobButton' >Add Job</button>
                    </div>

                    {/*Skills Section*/}
                    {/*Education Section*/}
                    {/*Contact Section*/}
                </div>

                <div className='Results'>
                    <p>{Fname}</p>
                    <p>{Lname}</p>
                </div>
            </div>
        </>
    )
}

export default Questions;