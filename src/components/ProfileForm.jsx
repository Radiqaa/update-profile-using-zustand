// ProfileForm.js
import React, { useState } from 'react';
import useAppStore from '../appStore';
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const navigate = useNavigate();
    const { updateUserData } = useAppStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
    });

    const handleChange = (data)=> {
        setFormData({
            name: data.target.name === 'name' ? data.target.value : formData.name,
            email: data.target.name === 'email' ? data.target.value : formData.email,
            bio: data.target.name === 'bio' ? data.target.value : formData.bio,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        updateUserData(formData);
        navigate('/');
    };

    return (
        <>
        
        <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border rounded-md"
                      
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border rounded-md"
                        ></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border rounded-md"
                        rows="3"
                    ></textarea>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default ProfileForm;
