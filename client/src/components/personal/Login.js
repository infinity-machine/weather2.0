import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [formInput, setFormInput] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hey')
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
                <button>LOG IN</button>
            </form>
        </div>
    )
}

export default Login