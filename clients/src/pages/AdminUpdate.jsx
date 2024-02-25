import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { useAuth } from '../ContextApi/TokenApi'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


/*..........................
............................
USER REGISTRER DATA UPDATE BY ADMIN (LOGIC)
......................................
........................*/
const AdminUpdate = (id) => {

  const navigate = useNavigate();
const {authorizationToken} = useAuth()
    const [data,setData] = useState({
        username: "",
        email: "",
        message: "",
    })
    const params = useParams()
    console.log("params data", params)
 const singleUserData = async(id) =>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        const UserData = await response.json();
        // console.log("USER AFTER UPDATE", data);
        setData(UserData.data)
      } catch (error) {
        console.log(error);
      }
 }

    useEffect(()=>{
        singleUserData()
    },[])

    const handleInput =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
        ...data,
        [name]: value,
      });
    }
    const handleSubmit =async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationToken,
      },
      body:JSON.stringify(data),
} );
if(response.ok){
toast.success("update succesfull")
navigate("/admin/users");
}else{
  toast.error("not updated")
}
} catch (error) {
           console.log(error) 
}
}
 return (
    <>
     <main className="main-container">
          <div className="section-registration">
            <div className="container-second">
              <div className="registration-form">
                <h1 className="main-heading ">Update data !</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      value={data.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                 <div>
                    <label htmlFor="phone">email</label>
                    <br />
                    <input
                      type="text"
                      name="phone"
                      value={data.phone}
                      onChange={handleInput}
                      placeholder="phone"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                 update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}
export default AdminUpdate;
