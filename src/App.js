import React, { useState } from 'react';
import Header from './components/Header';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import ResumePreview from './components/ResumePreview';
import './styles/App.css';

const App = () => {
    const [resumeData, setResumeData] = useState({
        personalInfo: {},
        experience: [],
        education: [],
        skills: []
    });

    const updatePersonalInfo = (info) => {
        setResumeData({ ...resumeData, personalInfo: info });
    };

    const updateExperience = (experiences) => {
      setResumeData({ ...resumeData, experience: experiences });
  };

  const updateEducation = (educations) => {
    setResumeData({ ...resumeData, education: educations });
};

const updateSkills = (skills) => {
    setResumeData({ ...resumeData, skills: skills });
};

    // Similar update functions for experience, education, and skills

    return (
        <div className="App">
            <Header />
            <div className="forms">
                <PersonalInfoForm onUpdate={updatePersonalInfo} />
                <ExperienceForm onUpdate={updateExperience} />
                <EducationForm onUpdate={updateEducation} />
                <SkillsForm onUpdate={updateSkills} />
            </div>
            <ResumePreview data={resumeData} />
        </div>
    );
};

export default App;
