import React, { useState } from 'react';

const SkillsForm = ({ onUpdate }) => {
    const [skills, setSkills] = useState([]);

    const handleChange = (index, event) => {
        const { value } = event.target;
        const updatedSkills = skills.map((skill, i) => 
            i === index ? value : skill
        );
        setSkills(updatedSkills);
        onUpdate(updatedSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, '']);
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
        onUpdate(updatedSkills);
    };

    return (
        <div>
            <h2>Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} className="skill-form">
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAddSkill}>Add Skill</button>
        </div>
    );
};

export default SkillsForm;
