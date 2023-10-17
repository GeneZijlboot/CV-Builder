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

  const [Company, setCompany] = useState('');
  const [Position, setPosition] = useState('');
  const [ExpFrom, setExpFrom] = useState('');
  const [ExpTo, setExpTo] = useState('');

  const handleSubmitCompany = (value) => {
    setCompany(value);
  };

  const handleSubmitPosition = (value) => {
    setPosition(value);
  };
  
  const handleSubmitExpFrom = (value) => {
    setExpFrom(value);
  };

  const handleSubmitExpTo = (value) => {
    setExpTo(value);
  };

  const [Skill, setSkill] = useState('');

  const handleSubmitSkill = (value) => {
    setSkill(value);
  };

  const [School, setSchool] = useState('');
  const [Degree, setDegree] = useState('');
  const [EducFrom, setEducFrom] = useState('');
  const [EducTo, setEducTo] = useState('');

  const handleSubmitSchool = (value) => {
    setSchool(value);
  };

  const handleSubmitDegree = (value) => {
    setDegree(value);
  };
  
  const handleSubmitEducFrom = (value) => {
    setEducFrom(value);
  };

  const handleSubmitEducTo = (value) => {
    setEducTo(value);
  };

  return (
    <div className="App">
      <Questions 
        fnameChange={handleSubmitFname}
        AdressChange={handleSubmitAdress}
        PhoneChange={handleSubmitPhone}
        EmailChange={handleSubmitEmail}
        DescriptionChange={handleSubmitDescription}

        Company={handleSubmitCompany}
        Position={handleSubmitPosition}
        ExpFrom={handleSubmitExpFrom}
        ExpTo={handleSubmitExpTo}

        Skill={handleSubmitSkill}

        School={handleSubmitSchool}
        Degree={handleSubmitDegree}
        EducFrom={handleSubmitEducFrom}
        EducTo={handleSubmitEducTo}

        onExpDelete={() => DeleteWorExpForm(index)}
      />

      <Results
        fname={fname}
        adress={adress} 
        phone={phone}
        email={email}
        description={description}

        Company={Company}
        Position={Position}
        ExpFrom={ExpFrom}
        ExpTo={ExpTo}

        Skill={Skill}

        School={School}
        Degree={Degree}
        EducFrom={EducFrom}
        EducTo={EducTo}
      />
    </div>
  );
}

export default App;