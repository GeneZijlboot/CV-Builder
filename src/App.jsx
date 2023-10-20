import Questions from './Question';
import Results from './Results';
import { useState } from 'react';

import './App.css';

function App() {
  const [fname, setFname] = useState('John Do');
  const [adress, setAdress] = useState('Amsterdam');
  const [phone, setPhone] = useState('0612345678');
  const [email, setEmail] = useState('exmaple@gmail.com');
  const [description, setDescription] = useState('A wonderfull exmaple of a description');

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

  const [WorkExpInputs, setWorkExpInputs] = useState([]);

  const WorkExpChanges = (WorkExpInputs) => {
    setWorkExpInputs(WorkExpInputs);
  }

  return (
    <div className="App">
      <Questions 
        fnameChange={handleSubmitFname}
        AdressChange={handleSubmitAdress}
        PhoneChange={handleSubmitPhone}
        EmailChange={handleSubmitEmail}
        DescriptionChange={handleSubmitDescription}

        onInputValuesChange={WorkExpChanges}
      />

      <Results
        fname={fname}
        adress={adress} 
        phone={phone}
        email={email}
        description={description}

        WorkExpInputs={WorkExpInputs}
      />
    </div>
  );
}

export default App;