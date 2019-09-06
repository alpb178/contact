import React, { Component } from 'react'
import ContactsForm from './ContactsForm'
import {Consumer} from  '../context/context'
import TextInputGroups from  '../layout/form_component/TextInputGroup'
import uuid from 'uuid'
import axios from 'axios'

class EditContacts extends Component{

    state={
        id:'',
        name: '',
        email: '',
        phone:'',
        errors:{}

    };
    // cargando los datos del backend para la modificacion
    async componentDidMount(){
        const {id}= this.props.match.params;
        const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact=res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    //metodo del boton

    onSubmit = async (dispatch,e) => {
        e.preventDefault();

        const{name, email, phone}=this.state;

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

        //objeto modificado
         const upContac={
             name,
             email,
             phone
         }
       
        //modificando el contacto
        const {id}=this.props.match.params;
        const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContac)
        dispatch({type:'UPDATE_CONTACT', payload: res.data})


         
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
                                <h1>Edit Contact</h1> 
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
                                  value="Update contact"/>
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



export default EditContacts;