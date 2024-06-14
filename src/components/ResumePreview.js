import React from 'react';

const ResumePreview = ({ data }) => {
    return (
        <div className="resume-preview">
            <h2>Resume Preview</h2>
            <section>
                <h3>Personal Information</h3>
                <p>Name: {data.personalInfo.name}</p>
                <p>Email: {data.personalInfo.email}</p>
                <p>Phone: {data.personalInfo.phone}</p>
                <p>Address: {data.personalInfo.address}</p>
            </section>
            {/* Similar sections for experience, education, and skills */}
        </div>
    );
};

export default ResumePreview;
