 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import {Consumer} from '../context/context'
 import axios from 'axios'
 import {Link} from 'react-router-dom'
 import { async } from 'q';
 
 class ContactsForm extends Component{
    state={
        ShowContactInfo: false
    };

    onShowClick=e =>{
     this.setState({ShowContactInfo: !this.state.ShowContactInfo});
    };

    /* metodo clasico deprecated
    onDeleteClick=(id,dispatch)=>{
     Metodo clasico deprecated 
      axios.delete( `https://jsonplaceholder.typicode.com/users/${id}`).then(res=>  dispatch({type:'DELETE_CONTACT', payload: id}) )
     };
    */

     onDeleteClick= async(id,dispatch)=>{
       try{
       const res= await axios.delete( `https://jsonplaceholder.typicode.com/users/${id}`)  
       dispatch({type:'DELETE_CONTACT', payload: id})
       }
        catch{
            dispatch({type:'DELETE_CONTACT', payload: id});
       }
        }
        

     render(){
         const {id,name,email,phone}=this.props;
         const {ShowContactInfo} = this.state;

         return(
             <Consumer>
                 {value =>{
                     const {dispatch}=value;
                     return(
                      
             <div className="card card-body m-sm-3" >
             <h4>
            <span className= "badge badge-pill badge-danger m-sm-3 "> {id} </span>
              {name}
              <i onClick={this.onShowClick} className="fas fa-sort-down m-sm-3 " style={{ cursor: 'pointer'}}/>
              <i onClick={this.onDeleteClick.bind(this,id,dispatch)} 
              className="fas fa-times m-sm-3 " 
              style={{ cursor: 'pointer' ,
               float:'right', 
               color:'black'}}/>
               <Link to={`/editContacts/${id}`}>  
               <i className="fas fa-pencil-alt  m-sm-3 " style={{ cursor: 'pointer',float:'right', color:'red'}}/>
                </Link>
             </h4>
               
               {ShowContactInfo ? (
                  <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                 
                   </ul>
                 ): null}
        
        </div>
                     )
                 }}

             </Consumer>



         )
     }
         
 }


 export default ContactsForm;