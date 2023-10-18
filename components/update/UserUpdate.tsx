"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Link from "next/link";

function Update() {
    // State to manage the form data
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        cell: '',
    });

    // State to track whether the form is in edit mode
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Creating a request object with the user data.
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }

        // Sending a POST request to the server's saveUser endpoint
        fetch('/api/saveUser', request)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Response from the server
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleCancel = () => {
        // Reverting the changes and exit edit mode
        setFormData({
            name: '',
            surname: '',
            email: '',
            cell: '',
        });
        setIsEditing(false);
    };

    return (
        <div>
            <Head>
            <title>Update Personal Information</title>
            </Head>
            <div className="form-container" style={{ backgroundColor: '#fff', maxWidth: '400px', margin: '100px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                <h1>User Information</h1>
                <div className="input-container" style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        readOnly={!isEditing}
                    />
                </div>
                <div className="input-container" style={{ marginBottom: '15px' }}>
                    <label htmlFor="surname" style={{ display: 'block', fontWeight: 'bold' }}>Surname:</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        readOnly={!isEditing}
                    />
                </div>
                <div className="input-container" style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        readOnly={!isEditing}
                    />
                </div>
                <div className="input-container" style={{ marginBottom: '15px' }}>
                    <label htmlFor="cell" style={{ display: 'block', fontWeight: 'bold' }}>Cell Number:</label>
                    <input
                        type="tel"
                        id="cell"
                        name="cell"
                        value={formData.cell}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        readOnly={!isEditing}
                    />
                </div>
                {isEditing ? (
                    <div className="button-container" style={{ marginTop: '20px' }}>
                        <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save</button>
                        <button onClick={handleCancel} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Cancel</button>
                    </div>
                ) : (
                    <div className="button-container" style={{ marginTop: '20px' }}>
                        <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}








/*function Update(){
        return (
            <div>
                <div className="form-container" style={{ backgroundColor: '#fff', maxWidth: '400px', margin: '100px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                    <h1>User Information</h1>
                    <div className="input-container" style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
                        <input type="text" id="name" value="John" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div className="input-container" style={{ marginBottom: '15px' }}>
                        <label htmlFor="surname" style={{ display: 'block', fontWeight: 'bold' }}>Surname:</label>
                        <input type="text" id="surname" value="Doe" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div className="input-container" style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
                        <input type="email" id="email" value="johndoe@example.com" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div className="input-container" style={{ marginBottom: '15px' }}>
                        <label htmlFor="cell" style={{ display: 'block', fontWeight: 'bold' }}>Cell Number:</label>
                        <input type="tel" id="cell" value="555-555-5555" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    <div className="button-container" style={{ marginTop: '20px' }}>
                        <button id="save-button" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save</button>
                        <button id="cancel-button" style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Cancel</button>
                    </div>
                </div>
            </div>
        );
}*/
export default Update;