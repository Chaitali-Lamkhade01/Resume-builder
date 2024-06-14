import React, { useState } from 'react';

const EducationForm = ({ onUpdate }) => {
    const [educations, setEducations] = useState([]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducations = educations.map((edu, i) => 
            i === index ? { ...edu, [name]: value } : edu
        );
        setEducations(updatedEducations);
        onUpdate(updatedEducations);
    };

    const handleAddEducation = () => {
        setEducations([...educations, { institution: '', degree: '', startDate: '', endDate: '', description: '' }]);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
        onUpdate(updatedEducations);
    };

    return (
        <div>
            <h2>Education</h2>
            {educations.map((education, index) => (
                <div key={index} className="education-form">
                    <label>Institution:</label>
                    <input
                        type="text"
                        name="institution"
                        value={education.institution}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Degree:</label>
                    <input
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={education.startDate}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={education.endDate}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={education.description}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <button type="button" onClick={() => handleRemoveEducation(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAddEducation}>Add Education</button>
        </div>
    );
};

export default EducationForm;
