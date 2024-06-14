import React, { useState } from 'react';

const PersonalInfoForm = ({ onUpdate }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
        onUpdate({ ...personalInfo, [name]: value });
    };

    return (
        <form>
            <h2>Personal Information</h2>
            <label>Name:</label>
            <input type="text" name="name" value={personalInfo.name} onChange={handleChange} />
            <label>Email:</label>
            <input type="email" name="email" value={personalInfo.email} onChange={handleChange} />
            <label>Phone:</label>
            <input type="text" name="phone" value={personalInfo.phone} onChange={handleChange} />
            <label>Address:</label>
            <input type="text" name="address" value={personalInfo.address} onChange={handleChange} />
        </form>
    );
};

export default PersonalInfoForm;
