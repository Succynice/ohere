import React, { useState } from 'react';
import { TextField, Button, } from '@mui/material';
import './EmailSearch.css'; // Import the CSS file

const EmailSearch = ({ onSearch }) => {
 const [email, setEmail] = useState('');

 const handleSearch = () => {
    onSearch(email);
 };

 return (
    <div className="emailSearchContainer">
      <TextField
        label="Search by Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="emailSearchField"
      />
      <Button variant="contained" color='secondary' onClick={handleSearch} className="emailSearchButton">
        Search
      </Button>
    </div>
 );
};

export default EmailSearch;
