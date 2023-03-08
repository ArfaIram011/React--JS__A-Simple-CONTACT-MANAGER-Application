import React, { useState, useEffect } from "react";
import Header from './components/Header';
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";


function App() {
  const { v4: uuidv4 } = require('uuid');
  const LOCAL_STORAGE_KEY = 'Contacts';
  const [contacts, setcontacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contact.id)
    //The spread operator can be used to take an existing array and add another element to it while still preserving the original array (famous original array’s?).
  }


  const removeContactHandler = (id) => {
    //filter returns all the elements of arr satisfying condition
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setcontacts(newContactList);
  }

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }
    , [contacts]);

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts)
      setcontacts(retrieveContacts);
  }
    , []);

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <h3 
              style={{marginTop:'20px',fontFamily:'sans-serif',textDecorationLine:'underline'}}>CONTACT LIST</h3>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  )
}
export default App;
