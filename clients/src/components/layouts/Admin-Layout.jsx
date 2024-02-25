
import { useEffect } from 'react';
import { NavLink, Outlet,Navigate } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useAuth } from '../../ContextApi/TokenApi';

const AdminLayout = () => {
  const {user,isLoading} = useAuth()
  // console.log("user admin layout",user)
  if(isLoading){
    return <h1>Loading....</h1>
   
  }
 
 if(!user.isAdmin){
return <Navigate to ="/"/>
   
  }
  return (
    <>
    <header >
        <div className="containers">
            <nav>
                <ul>
                <li><NavLink to="/admin/users"><FaUsers/>Users</NavLink></li>
                <li><NavLink to="/admin/contacts"> <MdContacts/>Contacts</NavLink></li>
                <li><NavLink to="/admin/services"><FaServicestack/>Services</NavLink></li>
                <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
 </>
  )
}

export default AdminLayout;
