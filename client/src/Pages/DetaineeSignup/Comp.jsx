import React, { useState } from 'react';
import styles from './c.module.css'; // Ensure this file contains your styles

const offences = [
    { label: '302', value: '302' },
    { label: '420', value: '420' },
    { label: '069', value: '069' },
    { label: '198', value: '198' },
    { label: '307', value: '307' },
    { label: '377', value: '377' },
    { label: '376', value: '376' },
    { label: '498A', value: '498A' },
    { label: '323', value: '323' },
    { label: '354', value: '354' },
    { label: '304B', value: '304B' },
    { label: '279', value: '279' },
    { label: '337', value: '337' },
    { label: '338', value: '338' },
    { label: '506', value: '506' },
  ];
  
const OffenceInput = () => {
  const [formData, setFormData] = useState({ offence: [] });
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(offences);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSuggestions(
      offences.filter((offence) =>
        offence.label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSelectOffence = (offence) => {
    if (!formData.offence.includes(offence.value)) {
      setFormData((prevState) => ({
        ...prevState,
        offence: [...prevState.offence, offence.value]
      }));
    }
    setInputValue('');
    setSuggestions(offences);
  };

  const handleRemoveOffence = (offence) => {
    setFormData((prevState) => ({
      ...prevState,
      offence: prevState.offence.filter((item) => item !== offence)
    }));
  };

  return (
    <div className={styles.formGroup}>
      <label>Offence</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.inputField}
        style={{ width: '350px' }}
      />
      {inputValue && (
        <div className={styles.suggestions}>
          {suggestions.map((offence) => (
            <div
              key={offence.value}
              className={styles.suggestionItem}
              onClick={() => handleSelectOffence(offence)}
            >
              {offence.label}
            </div>
          ))}
        </div>
      )}

      <div className={styles.selectedOffences}>
        {formData.offence.map((offence) => (
          <div key={offence} className={styles.offenceTag}>
            {offences.find((o) => o.value === offence)?.label}
            <button onClick={() => handleRemoveOffence(offence)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffenceInput;
