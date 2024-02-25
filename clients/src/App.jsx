import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useAuth } from './ContextApi/TokenApi';
// import { AuthProvider } from './ContextApi/TokenApi';
import { Logout } from './pages/Logout';
import AdminLayout from './components/layouts/Admin-layout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import AdminUpdate from './pages/AdminUpdate';


function App() {

 
  return (
    <>

  <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path ="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="contacts" element={<AdminContacts/>}/>
          <Route path ="users/:id/edit" element ={<AdminUpdate/>}/>
          </Route>
        </Routes>
        <Footer/>
      </>
    </Router>
  
    </>
  );
}

export default App;


