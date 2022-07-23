 import React from "react";
 import TaskCard from "./TaskCard";
 import './Taskli.css'

 const Taskli = (props) => {
     console.log(props);
     const deleteContactHandler = (id) => {
         props.getContactId(id);
     }
     const renderlist = props.contacts.map((contact) => {
         return(
             <TaskCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
         );
     })
     return(
         <div className="abc">
         <h2 className="heading2">Task List</h2>
         <div className="xyz">{renderlist}</div>
         </div>
     );
 }

 export default Taskli;