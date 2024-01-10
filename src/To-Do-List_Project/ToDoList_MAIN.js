import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./Header";
import './toDoList.css'
import AddContact from "./AddContacts";
import ContactList from "./ContactList";
import uuid4 from "uuid4";

function ToDoList(){
  const localStrorageKey="conatct"

  const[contact , setContact]=useState(()=>{
   return JSON.parse(localStorage.getItem(localStrorageKey))
  || []})

  
  useEffect(()=>{
    localStorage.setItem(localStrorageKey,JSON.stringify(contact))
  },[contact])

  const addContact=(data)=>{
    setContact([...contact,{id:uuid4(),data}])
  }

  const removeContact=(id)=>{
      const updatedList=contact.filter((val)=>{
        return val.id !== id;
      })
      setContact(updatedList)
  }

    return(
       <div>
         <Header/>
         <AddContact addContact={addContact}/>
         <ContactList contact={contact} removeContact={removeContact}/>
       </div>

    )
}

export default ToDoList

// const root=ReactDOM.createRoot(document.getElementById("root")); 
// root.render(<ToDoList/>)  