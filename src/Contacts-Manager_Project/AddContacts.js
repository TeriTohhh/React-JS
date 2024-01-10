import React, { useState } from 'react'

function AddContact({addContact}) {
  const [contactData,setContactData]=useState({name:"",email:""})

  const handleChange=(e)=>{
      if(e.target.name==="name")setContactData({...contactData,name: e.target.value})
      else{
        setContactData({...contactData,email: e.target.value})
    }
  }

  const handleAdd=()=>{
    if(contactData.name===""||contactData.email==="")
    {
      alert("pleae fill all the details")
      return;
    }
    addContact(contactData)
    setContactData({name:"" , email :""})
  }

  return (
    <>
        <div className="form-header">
            <div className='add-contacts mt-2'>Add contacts </div>
                <form action="">
                    <label htmlFor="">Name</label><br/>
                    <input type="text" placeholder='Enter Name' name='name' className='form-control mt-2'value={contactData.name} onChange={handleChange}/>


                    <label htmlFor="">Email</label><br/>
                    <input className='form-control mt-2' type='email' placeholder='Enter Email' name='Email'value={contactData.email} onChange={handleChange}/>
                </form>
                <button className='btn btn-success mt-3' onClick={handleAdd}>Add Contact </button>
        </div>
    </>
  )
}

export default AddContact