import React, { useState } from 'react';

const ExperienceForm = ({ onUpdate }) => {
    const [experiences, setExperiences] = useState([]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedExperiences = experiences.map((exp, i) => 
            i === index ? { ...exp, [name]: value } : exp
        );
        setExperiences(updatedExperiences);
        onUpdate(updatedExperiences);
    };

    const handleAddExperience = () => {
        setExperiences([...experiences, { jobTitle: '', company: '', startDate: '', endDate: '', description: '' }]);
    };

    const handleRemoveExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        onUpdate(updatedExperiences);
    };

    return (
        <div>
            <h2>Work Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience-form">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={experience.jobTitle}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Company:</label>
                    <input
                        type="text"
                        name="company"
                        value={experience.company}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={experience.startDate}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={experience.endDate}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={experience.description}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <button type="button" onClick={() => handleRemoveExperience(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAddExperience}>Add Experience</button>
        </div>
    );
};

export default ExperienceForm;
