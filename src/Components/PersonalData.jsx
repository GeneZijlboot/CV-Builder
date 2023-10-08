import { useState } from "react";

function PersonalData({ fnameChange , AdressChange , PhoneChange , EmailChange , DescriptionChange  }){

    const [fname, setFname] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleFnameChange = (event) => {
      const FnameValue = event.target.value;
      setFname(FnameValue);
      fnameChange(FnameValue);
    };

    const handleAdressChange = (event) => {
        const AdressValue = event.target.value;
        setAdress(AdressValue);
        AdressChange(AdressValue);
    };

    const handlePhoneChange = (event) => {
        const PhoneValue = event.target.value;
        setPhone(PhoneValue);
        PhoneChange(PhoneValue);
      };
  
      const handleEmailChange = (event) => {
          const EmailValue = event.target.value;
          setEmail(EmailValue);
          EmailChange(EmailValue);
      };

      const handleDescriptionChange = (event) => {
        const DescriptionValue = event.target.value;
        setDescription(DescriptionValue);
        DescriptionChange(DescriptionValue);
    };

    return (
        <div className="UserInfo">
            <p className="UserInfoText">Personal Details</p>
            <div className="UserInfoRow1">
                <div>
                    <p className="UserInfoRowtext">Fullname</p>
                    <input  
                        className="FullnameInput"
                        type="text" 
                        placeholder="enter full name"
                        value={fname}
                        onChange={handleFnameChange}
                        required
                    />
                </div>
                <div>
                    <p className="UserInfoRowtext">Email</p>
                    <input
                        className="EmailInput"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="enter email"
                        required
                    />
                </div>
            </div>
            <div className="UserInfoRow2">
                <div>
                    <p className="UserInfoRowtext">Phone Number</p>
                    <input 
                        className="PhoneInput"
                        type="number"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="(+31) 6 12345678" 
                        required
                    />
                </div>
                <div>
                    <p className="UserInfoRowtext">Adress</p>
                    <input 
                        className="AdressInput"
                        type="text"
                        value={adress}
                        onChange={handleAdressChange}
                        placeholder="enter Adress"
                        required
                    />
                </div>
                <div className="Description">
                    <p className="UserInfoRowtext">Description</p>
                    <input 
                        className="DescriptionInput"
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="enter description"
                        required
                    />
                </div>
            </div>
      </div>
    )
}

export default PersonalData;