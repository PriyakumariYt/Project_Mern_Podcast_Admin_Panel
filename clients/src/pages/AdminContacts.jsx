import React, { useEffect, useState } from 'react'
import { useAuth } from '../ContextApi/TokenApi'
import { toast } from "react-toastify";
const AdminContacts = () => {
const{authorizationToken} =useAuth();
const [contacts,setContacts] = useState([]);


/*..........................
............................
CONTACT GET LOGIC
......................................
........................*/
const getAllContactData = async() =>{
try {
        const response = await fetch("http://localhost:5000/api/admin/contacts",{
            method:"GET",
            headers:{
                Authorization: authorizationToken,
            }
        })
      const data = await response.json();
      // console.log("contact user ka",data)

setContacts(data.contacts)
    } catch (error) {
        console.log(error)
    }
};


/*..........................
............................
CONTACT dELETED LOGIC
......................................
........................*/
const handleDelete = async(id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationToken,
      },
    });

    console.log("contact response", response)
if(response.ok){
  getAllContactData()
  toast.success("Contact Deleted Succesfully")
}else{
  toast.error("Contact Not Deleted")
}
} catch (error) {
    console.log(error);
  }
};

 useEffect(()=>{
  getAllContactData()
},[]);

console.log("contact data",contacts)
return (
    <>
    <h1 className='adminHeader'>Users Contacts</h1>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>message</th>
          <th>Delete</th>
         </tr>
      </thead>
      <tbody>
        {contacts.map((val, index) => (
         
          <tr key={index}>
            <td>{val.username}</td>
            <td>{val.email}</td>
            <td>{val.message}</td>
           
             <td>
               <button onClick={() => handleDelete(val._id)}>Delete</button>
            </td>
          </tr>
        ))}
      


      </tbody>
    </table>
  </>
  );
};

export default AdminContacts;


