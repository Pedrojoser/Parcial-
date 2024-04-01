// src/ContactList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddContactForm from './AddContactFrom'; 
import "./contact.css"; // Importa el archivo de estilos CSS

const ContactList = () => {
  const [contacts, setContacts] = React.useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project"
      );
      setContacts(result.data);
    };
    fetchData();
  }, []);

  const handleToggleAddForm = () => {
    setShowAddForm(!showAddForm); 
  };

  return (
    <div className="contact-list-container">
      <button className="add-contact-button" onClick={handleToggleAddForm}>Añadir contacto</button> {/* Aplica la clase add-contact-button */}
      {showAddForm && <AddContactForm />}
      <table className="contact-table">
        <thead>
          <tr>
            <th>Identify</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.identify}>
              <td>{contact.identify}</td>
              <td>{contact.names}</td>
              <td>{contact.telephone}</td>
              <td>
                <img src={contact.image} alt={contact.names} className="contact-image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
