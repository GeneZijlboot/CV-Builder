import './WorkExp.css'

function createCard(){
    console.log('pauper');
    return (
        <p>tieves</p>
    )
}
function WorkExp(){
    return(
        <>
            <div className='App'>
            <p className='text3'>Work Experience</p>
                <div className='Card'>

                </div>
                <button className='JobButton' onClick={createCard}>Add Job</button>
            </div>
        </>
    )
}

export default WorkExp;