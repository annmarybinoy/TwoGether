import React, { useState } from 'react';
import axios from 'axios';

const Heart = () => {
    const [heartSize, setHeartSize] = useState(50);

    const handleClick = async () => {
        setHeartSize(heartSize + 10);
        try {
            await axios.post('/api/heart', { size: heartSize });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="heart-container" onClick={handleClick}>
            <i className="fas fa-heart" style={{ fontSize: `${heartSize}px` }}></i>
        </div>
    );
};

export default Heart;