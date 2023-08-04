import './PersonalData.css'

function PersonalData(){
    return (
        <>
            <div className='App'>
                <p className='text2'>Personal Data</p>
                <div className="Initials">
                    <input placeholder="FirstName"/>
                    <input placeholder="LastName"/>
                </div>
                <input className='Niche' placeholder='Niche: Software Developer' />
                <br />
                <input  className='Info' placeholder='Something about yourself... ' />
            </div>
        </>
    )
}

export default PersonalData;