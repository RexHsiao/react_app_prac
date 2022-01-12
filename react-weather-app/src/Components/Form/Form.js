import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ submitSearch }) => {
    const [ location, setLocation ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location" 
                type="text"
                className="input form-control"
                placeholder="Search for location"
                required 
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button 
                type="submit" 
                className="button"
                onClick={onSubmit}
            >
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;