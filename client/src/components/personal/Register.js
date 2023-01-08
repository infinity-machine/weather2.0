import React from 'react'
import { useState } from 'react';
import { registerUser } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formInput, setFormInput] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user_to_register = formInput
        if (!user_to_register.username && !user_to_register.password) return setError('YOU MUST ENTER ALL REQUIRED FIELDS');

        try {
            const token = await registerUser(user_to_register);
            localStorage.setItem('token', token);
            navigate('/');
        } 
        catch(error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formInput.email}
                    onChange={handleInputChange}>
                </input>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formInput.password}
                    onChange={handleInputChange}>
                </input>
                <button>REGISTER</button>
            </form>
            {error ? <p>{error}</p> : <></>}
        </div>
    )
}

export default Register