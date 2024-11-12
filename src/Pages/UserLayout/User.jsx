import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./../../components/NavBar/NavBar";
import Home from "./Home/Home";
import Doctors from "./Doctors/Doctors";
import Reservation from "./Reservation/Reservation";
import ContactUs from "./Contact Us/ContactUs";
import LogIn from "./Log in/LogIn";

const User = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
    );
};

export default User;
