import React, { useState } from 'react';
import '../styles/practical.css';

export default function PracticalExperience() {
    const [editing, setEditing] = useState(true);
    const [experience, setExperience] = useState({
        company: '', 
        position: '', 
        responsibilities: '', 
        from: '', 
        until: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience(prevExperience => ({ ...prevExperience, [name]: value }));
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
                        Company Name:
                        <input 
                        type="text" 
                        name="company" 
                        value={experience.company} 
                        onChange={handleChange} 
                        />

                    </label>

                    <label>
                        Position Title:
                        <input 
                        type="text" 
                        name="position" 
                        value={experience.position} 
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Main Responsibilities:
                        <input 
                        type="text" 
                        name="responsibilities" 
                        value={experience.responsibilities} 
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Date From:
                        <input 
                        type="text" 
                        name="from" 
                        value={experience.from} 
                        onChange={handleChange} 
                        />
                    </label>

                    <label>
                        Date Until:
                        <input 
                        type="text" 
                        name="until" 
                        value={experience.until} 
                        onChange={handleChange} 
                        />

                    </label>

                    <button type="submit">Submit</button>
                    
                </form>
            ) : (
                <div>
                    <p>Company Name: {experience.company}</p>
                    <p>Position Title: {experience.position}</p>
                    <p>Main Responsibilities: {experience.responsibilities}</p>
                    <p>Date From: {experience.from}</p>
                    <p>Date Until: {experience.until}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
