import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [partnerCode, setPartnerCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const fetchPartnerCode = async (id) => {
        try {
            const res = await axios.get(`/api/users/${id}/partner-code`);
            setGeneratedCode(res.data.partnerCode);
        } catch (err) {
            console.error('Error fetching partner code:', err);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            setUserId(res.data.user.id);
            setIsLoggedIn(true);
            await fetchPartnerCode(res.data.user.id);
        } catch (err) {
            console.error('Error during login:', err);
        }
    };

    const handleLinkPartner = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/link-partner', {
                userId,
                partnerCode,
            });
            alert(`Partners linked successfully: ${res.data.user.partner}`);
            navigate('/');
        } catch (err) {
            console.error('Error linking partner:', err);
        }
    };

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <h3>Welcome, {username}!</h3>
                    <p>Your Partner Code: <strong>{generatedCode}</strong></p>
                    <form onSubmit={handleLinkPartner}>
                        <input
                            type="text"
                            placeholder="Enter Partner Code"
                            value={partnerCode}
                            onChange={(e) => setPartnerCode(e.target.value)}
                        />
                        <button type="submit">Link Partner</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
