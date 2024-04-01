import React, { useState } from 'react';
import axios from 'axios';
import "./contact.css";

const AddContactForm = ({ onAddContact }) => {
  const [names, setNames] = useState('');
  const [telephone, setTelephone] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!names || !telephone || !image) {
      setError('Por favor completa todos los campos');
      return;
    }

    const newContact = { names, telephone, image };

    try {
      const response = await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', newContact);

      if (response.status === 200) {
        setNames('');
        setTelephone('');
        setImage('');
        setError('');
        alert('¡Contacto agregado exitosamente!');
      } else {
        setError('Ocurrió un error al agregar el contacto');
      }
    } catch (error) {
      setError('Ocurrió un error al agregar el contacto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombres"
        value={names}
        onChange={(e) => setNames(e.target.value)}
        className="input-field" // Agrega la clase input-field al input de nombres
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        className="input-field" // Agrega la clase input-field al input de teléfono
      />
      <input
        type="url"
        placeholder="URL de la imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="input-field" // Agrega la clase input-field al input de URL de imagen
      />
      {error && <p>{error}</p>}
      <button className="add-contact-button" type="submit">Agregar Contacto</button>
    </form>
  );
};

export default AddContactForm;
