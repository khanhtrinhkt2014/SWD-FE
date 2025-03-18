import React, { useState } from "react";

const Booking = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        date: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAppointment = { 
            id: Date.now(),
            ...formData 
        };

        
        const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        localStorage.setItem("appointments", JSON.stringify([...existingAppointments, newAppointment]));

        alert("Your appointment request has been sent!");
        setFormData({
            firstName: "",
            lastName: "",
            workEmail: "",
            phoneNumber: "",
            date: "",
            notes: "",
        });
    };

    return (
        <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-5">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-1/2 p-2 border border-gray-300 rounded" required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-1/2 p-2 border border-gray-300 rounded" required />
                </div>
                <input type="email" name="workEmail" placeholder="Work Email" value={formData.workEmail} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                <textarea name="notes" placeholder="Additional Notes (optional)" value={formData.notes} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                <button type="submit" className="w-full bg-gradient-to-r from-[#2DB4F7] to-[#35A4E0] text-white py-2 rounded hover:opacity-80">
                    Submit Appointment
                </button>
            </form>
        </section>
    );
};

export default Booking;
