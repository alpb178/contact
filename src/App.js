import React from 'react';
import Contacts from './component/contacts/Contacts'
import Header from './component/layout/Header'
import {Provider} from './component/context/context'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import AddContacts from './component/contacts/AddContacts'
import EditContacts from './component/contacts/EditContacts'
import About from './component/pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NotFound from './component/pages/NotFound';
import Test from './component/test/Test';

function App() {
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
    <div className="App" >
     < Header titlePage="Contact Manager" />
     <div className="container">
       <Switch>
         <Route exact path="/" component= {Contacts}/>
         <Route exact path="/addcontacts" component= {AddContacts}/>
         <Route exact path="/editContacts/:id" component= {EditContacts}/>
         <Route exact path="/about" component= {About}/>
         <Route exact path="/test" component= {Test}/>
         <Route component= {NotFound}/>

       </Switch>
     </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
