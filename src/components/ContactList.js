import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {
    console.log(props)

    const deleteContactHandler=(id)=>{
           props.getContactId(id);
    }
    const renderContactList=props.contacts?.map((contact)=>{
        return(
            <React.Fragment>

              
                  <ContactCard 
                  contact={contact}
                  clickHandler={deleteContactHandler}
                  id={contact.id}
                  key={contact.id}/>
            </React.Fragment>
        );
    });
  return (
    <div className='ui celled list'>
       {renderContactList}
        
    </div>
  )
}

export default ContactList