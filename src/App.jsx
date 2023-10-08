import Questions from './Question';
import Results from './Results';
import { useState } from 'react';

import './App.css';

function App() {
  const [fname, setFname] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitFname = (value) => {
    setFname(value);
  };

  const handleSubmitAdress = (value) => {
    setAdress(value);
  };

  const handleSubmitPhone = (value) => {
    setPhone(value);
  };

  const handleSubmitEmail = (value) => {
    setEmail(value);
  };

  const handleSubmitDescription = (value) => {
    setDescription(value);
  };

  return (
    <div className="App">
      <Questions 
        fnameChange={handleSubmitFname}
        AdressChange={handleSubmitAdress}
        PhoneChange={handleSubmitPhone}
        EmailChange={handleSubmitEmail}
        DescriptionChange={handleSubmitDescription}
      />

      <Results
        fname={fname}
        adress={adress} 
        phone={phone}
        email={email}
        description={description}
      />
    </div>
  );
}

export default App;