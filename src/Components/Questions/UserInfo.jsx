import { useState } from "react";

function TestParagraph(props){
    return(
        <p>{props.Fname}</p>
    )
}

export default function UserInfo(){
    const [Fname, setFname] = useState();

    const HandleSetFname = (event) => {
        setFname(event.target.value);
    }

    return (
        <div className="UserInfo">
            <TestParagraph Fname={Fname}/>
            <p className="UserInfoText">Personal Details</p>
            <div className="UserInfoRow1">
                <div>
                    <p className="UserInfoRowtext">Fullname</p>
                    <input onChange={HandleSetFname} type="text" name="Fname" id="Fname" placeholder="enter full name" required/>
                    <p>{Fname}</p>
                </div>
                <div>
                    <p className="UserInfoRowtext">Email</p>
                    <input type="email" name="email" id="v" placeholder="enter email" required/>
                </div>
            </div>
            <div className="UserInfoRow2">
                <div>
                    <p className="UserInfoRowtext">Phone Number</p>
                    <input type="tel" name="tel" id="tel" placeholder="(+31) 6 12345678" required/>
                </div>
                <div>
                    <p className="UserInfoRowtext">Adress</p>
                    <input type="email" name="Adress" id="Adress" placeholder="enter Adress" required/>
                </div>
            </div>
        </div>
    )
}