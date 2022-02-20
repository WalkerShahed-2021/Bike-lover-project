import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = () => {
        const user = { email }
        fetch('https://murmuring-cove-61906.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                console.log(data);
            })
    }
    return (
        <div className='App'>
            <h4 style={{ marginTop: '100px' }}>Hello Admin</h4>
            <div>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /> <br />
                <Button onClick={handleAdminSubmit} variant='contained'>Make Admin</Button>
            </div>
            {success?.email && <Alert severity="success">Admin Make successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;