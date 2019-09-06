 import React, { Component } from 'react'
 import ContactsForm from './ContactsForm'
 import {Consumer} from  '../context/context'
 
 class Contacts extends Component{
     
     render(){

         return(
             <Consumer>
                {value=> {
                    const {contacts}=value;
                    return(
                        <div>
               {contacts.map(contact =>
               
              <ContactsForm 
                id={contact.id}
                key={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
              />
               )}
             </div>
                    );
                }}
             </Consumer>
         )
     }
 }



 export default Contacts;