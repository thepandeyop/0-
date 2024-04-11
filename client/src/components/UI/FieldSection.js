import React, { useState } from 'react';
import '../../styles/FieldSection.css';

const FieldSelection = ({ onFieldSelect }) => {
    const [selectedField, setSelectedField] = useState('');

    const handleFieldChange = (e) => {
        const field = e.target.value;
        setSelectedField(field);
        onFieldSelect(field); // Call the onFieldSelect prop with the selected field
    };

    return (
        <section className="field-selection">
            <h2>Choose Your Field of Study</h2>
            <div className="field-dropdown">
                <select value={selectedField} onChange={handleFieldChange}>
                    <option value="">Select Field</option>
                    <option value="engineering">Engineering</option>
                    <option value="medicine">Medicine</option>
                    <option value="business">Business</option>
                    <option value="arts">Arts</option>
                    <option value="science">Science</option>
                </select>
            </div>
            {selectedField && (
                <p>You have selected: <strong>{selectedField}</strong></p>
            )}
        </section>
    );
};

export default FieldSelection;
