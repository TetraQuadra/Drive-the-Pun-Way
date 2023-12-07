import React, { useEffect, useRef, useState } from 'react';
import styles from './InputDropdown.module.css';

const InputDropdown = ({ options, placeholder, onChange, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
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
        <>
            <div ref={inputRef} className={styles.dropdown}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={placeholder}
                    onFocus={() => setIsOpen(true)}

                />
                {isOpen && (
                    <ul className={styles.options}>
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
            </div>
        </>
    );
};


export default InputDropdown;
