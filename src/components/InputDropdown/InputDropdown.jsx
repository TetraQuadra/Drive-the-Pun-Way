import React, { useEffect, useRef, useState } from 'react';
import styles from './InputDropdown.module.css';
import { ReactComponent as Shevron } from 'images/icons/chevron-down.svg';
import CloseButton from 'components/CloseButton/CloseButton';

const InputDropdown = ({ label = 'Label', options, placeholder = 'Select option', onChange, className, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder)
    const inputRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option.label)
        onChange({ [name]: option.value })
        setIsOpen(false);
    };

    const handleEmptySelect = () => {
        setSelectedOption(placeholder)
        onChange({ [name]: null });
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!inputRef.current) {
                return;
            }
            if (inputRef.current && !inputRef.current.contains(event.target) && isOpen) {
                setIsOpen(false)
            }
        }

        if (!isOpen) {
            return
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [isOpen])


    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            <label className={styles.label}>{label}</label>
            <div ref={inputRef} className={styles.dropdown}>
                <input
                    name={name}
                    type="button"
                    className={styles.input}
                    onClick={() => setIsOpen(!isOpen)}
                    value={selectedOption}
                />
                <Shevron className={`${styles.shevron} ${isOpen && styles.active}`} />
                {isOpen && (
                    <ul className={`${styles.options} ${className}`}>
                        <li
                            className={styles.option}
                            onClick={() => handleEmptySelect()}
                        >{placeholder}</li>
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={styles.option}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    backgroundColor: selectedOption === option.value ? '#f0f0f0' : 'white',
                                }}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedOption && (selectedOption !== placeholder) && <CloseButton onClick={() => handleEmptySelect()} className={styles.closeButton} />}
            </div>
        </div>
    );
};


export default InputDropdown;
