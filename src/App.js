import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./contactlist";
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);

  const onAddContact = async (newContact) => {
    const result = await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", newContact);
    setContacts([...contacts, result.data]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
      setContacts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Agenda Telefonica</h1>
      <ContactList contacts={contacts} onAddContact={onAddContact} />
    </div>
  );
}

export default App;