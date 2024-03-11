import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MyButton from './Button.jsx';

const LoginForm = ({ onLogin }) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
 };

 return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <MyButton onClick={handleSubmit}>Login</MyButton>
    </form>
 );
};

export default LoginForm;
