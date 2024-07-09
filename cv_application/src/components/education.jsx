import React, { useState } from 'react';
import '../styles/education.css';

export default function Education() {
    const [editing, setEditing] = useState(true);
    const [education, setEducation] = useState({ school: '', title: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation(prevEducation => ({ ...prevEducation, [name]: value }));
    };

    const handleEdit = () => setEditing(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    return (
        <div>
            {editing ? (
                <form onSubmit={handleSubmit} className="form">
                    <label>
                        School Name:
                        <input type="text" 
                        name="school" 
                        value={education.school} 
                        onChange={handleChange} 
                        />

                    </label>
                    <label>
                        Title of Study:
                        <input 
                        type="text" 
                        name="title" 
                        value={education.title} 
                        onChange={handleChange} 
                        />
                    </label>
                    <label>
                        Date of Study:
                        <input 
                        type="text" 
                        name="date" 
                        value={education.date} 
                        onChange={handleChange} 
                        />
                    </label>
                    
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>School Name: {education.school}</p>
                    <p>Title of Study: {education.title}</p>
                    <p>Date of Study: {education.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
