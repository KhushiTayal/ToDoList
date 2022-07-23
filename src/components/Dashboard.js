import React, { useState, useEffect } from "react";
//import { uuid } from "uuidv4";
import AddTask from "./AddTask";
import Taskli from "./Taskli";
import './Dashboard.css';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const lckey = "contacts"
  const [contacts, setContact] = useState([]);
  const addcontacthandler = (contact) => {
    console.log(contact);
    setContact([...contacts, {id: uuidv4(), ...contact}]);
  };
  const removecontact = (id) => {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newcontactlist);
  }
  useEffect(() => {
    const retrievedata = JSON.parse(localStorage.getItem(lckey));
    if(retrievedata){
      setContact(retrievedata);
    }
  },[]);
  useEffect(() => {
    localStorage.setItem(lckey, JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className="App">
      <div className="container"><h1 className="heading">To Do List</h1>
      <AddTask addcontacthandler={addcontacthandler}/>
      <Taskli contacts={contacts} getContactId={removecontact}/>
      </div>
    </div>
  );
}

export default Dashboard;
