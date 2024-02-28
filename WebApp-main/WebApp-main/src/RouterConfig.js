// RouterConfig.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentWrapper from './ContentWrapper'; // Importez la configuration de route
import ContactList from './ContactList'; // Importez le composant ContactList
import ContactDetail from './ContactDetail'; // Importez le composant ContactDetail

const RouterConfig = ({ toggleModal, data, currentPage, getAllContacts, updateContact, updateImage }) => {
  return (
    <Router>
      <Routes>
        {/* Assurez-vous que le contenu est rendu dans la route souhaitée */}
        <Route
          path="/"
          element={
            <ContentWrapper
              toggleModal={toggleModal}
              data={data}
              currentPage={currentPage}
              getAllContacts={getAllContacts}
              updateContact={updateContact}
              updateImage={updateImage}
            />
          }
        />

        {/* Route pour afficher la liste des contacts */}
        <Route
          path="/contacts"
          element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />}
        />

        {/* Route pour afficher les détails d'un contact */}
        <Route
          path="/contacts/:id"
          element={<ContactDetail updateContact={updateContact} updateImage={updateImage} />}
        />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
