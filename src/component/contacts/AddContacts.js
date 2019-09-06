import React, { Component } from 'react'
import ContactsForm from './ContactsForm'
import {Consumer} from  '../context/context'
import TextInputGroups from  '../layout/form_component/TextInputGroup'
import uuid from 'uuid'
import axios from 'axios'

class AddContacts extends Component{

    state={
        id:'',
        name: '',
        email: '',
        phone:'',
        errors:{}

    };

    onSubmit = async (dispatch,e) => {
        e.preventDefault();

        const{id,name, email, phone}=this.state;

        //check errors
         if(name==''){
             this.setState({errors: {name: 'Name is required'}});
             return;
         }

         if(phone==''){
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        if(email==''){
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        const newContact= {
          //  id:uuid,
            name,
            email,
            phone
        }

       // metodo antiguo axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(res =>dispatch({type: 'ADD_CONTACT', payload: res.data}))
        
       const res= await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
       dispatch({type:'ADD_CONTACT',payload:res.data})
       

       // de forma offline
       // dispatch({type: 'ADD_CONTACT', payload: newContact})
        // limpiando el formulario
        this.setState({
            name:'',
            email:'',
            phone:''
        })

        // este comando es para ir hacia la pagina q dice
        this.props.history.push('/');

    }
    OnChange= e => this.setState({[e.target.name]:e.target.value});

    
    render(){
        const{name,phone,email,errors}=this.state;
        return(
            <Consumer>
              {
                value=> {
                    const {dispatch}=value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">
                                <h1>add Contact</h1> 
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                 <TextInputGroups
                                     label="Name"
                                     name="name"
                                     placeholder="Enter Name ..."
                                     value={name}
                                     onChange={this.OnChange}
                                     error={errors.name}
                                     />  
                                   <TextInputGroups
                                     label="Eamil"
                                     name="email"
                                     type="email"
                                     placeholder="Enter email ..."
                                     value={email}
                                     onChange={this.OnChange}
                                     error={errors.email}
                                     />  
                                     <TextInputGroups
                                     label="Phone"
                                     name="phone"
                                     placeholder="Enter phone ..."
                                     value={phone}
                                     onChange={this.OnChange}
                                     error={errors.phone}
                                     />  
                                                                              
                                 <input 
                                 type="submit" 
                                  className="btn btn-light btn-block " 
                                  value="add contact"/>
                                </form>
                            </div>
                           
                        </div>
                      
                    )

                }
              }
            </Consumer>
             )
               
    }
}



export default AddContacts;