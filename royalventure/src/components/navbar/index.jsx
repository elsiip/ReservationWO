import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import '../../App.css';
import useAuth from "../../hook/authContext";

export default function Navbar() {
    const navbarStyle = {
        backgroundColor: 'transparent', 
    };

    const { currentUser } = useAuth();

    return (
        <div className={`px-[64px] py-[24px] flex justify-between items-center roboto-regular`} style={navbarStyle}>
            <NavLink to="/" className="flex items-center">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <div className='flex space-x-[40px]'>
                <NavLink to="/" className="text-white">Home</NavLink>
                <button className='text-white'> Packages</button>
                <button className='text-white'> Services</button>
                <button className='text-white'> Testimonials</button>
                <button className='text-white'> Reservation</button>
                <NavLink to="/history" className='text-white'>History</NavLink>
                {currentUser ? (
                    <span className="text-gray-400 cursor-not-allowed">Sign In/Sign Up</span>
                ) : (
                    <NavLink to='/signin' className="text-white">Sign In/Sign Up</NavLink>
                )}
            </div>
        </div>
    );
}
