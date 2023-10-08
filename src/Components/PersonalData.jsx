import { useState } from "react";

function PersonalData({ fnameChange , AdressChange , PhoneChange , EmailChange  }){

    const [fname, setFname] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    return (
        <div className="UserInfo">
            <p className="UserInfoText">Personal Details</p>
            <div className="UserInfoRow1">
                <div>
                    <p className="UserInfoRowtext">Fullname</p>
                    <input  
                        className="A"
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
                        className="A"
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
                        type="text"
                        value={adress}
                        onChange={handleAdressChange}
                        placeholder="enter Adress"
                        required
                    />
                </div>
            </div>
      </div>
    )
}

export default PersonalData;