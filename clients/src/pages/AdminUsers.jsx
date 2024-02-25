import React, { useEffect, useState } from 'react'
import { useAuth } from '../ContextApi/TokenApi'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
const AdminUsers = () => {

  const{authorizationToken} =useAuth()
  const [users,setUsers] = useState([])

const getAllUserData = async() =>{

    try {
        const response = await fetch("http://localhost:5000/api/admin/users",{
            method:"GET",
            headers:{
                Authorization: authorizationToken,
            }
        })
      const data = await response.json()
      // console.log("data user ka",data)
//  console.log(`users ${data}`)
setUsers(data.users)
    } catch (error) {
        console.log(error)
    }
}
const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();

    // console.log("USER AFTER DELETED", data);
    toast.success("User deleted Successfull")
  } catch (error) {
    console.log(error);
  }
};


 useEffect(()=>{
  getAllUserData()
},[])

// console.log("user data",users)



return (
  <>
    <h1 className='adminHeader'>Users data</h1>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
  <Link to={`/admin/users/${user._id}/edit`} style={{ color: 'green', textDecoration: 'underline', fontWeight: 'bold' }}>
    Edit
  </Link>
</td>

             <td>
               <button onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
}

export default AdminUsers;


