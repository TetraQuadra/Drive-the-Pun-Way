import React, { useEffect, useRef, useState } from 'react';
import styles from './InputDropdown.module.css';

const InputDropdown = ({ options, placeholder = 'Select option', onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder)
    const inputRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option.label)
        onChange(option);
        setIsOpen(false);
    };

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
        <>
            <div ref={inputRef} className={styles.dropdown}>
                <input
                    type="button"
                    className={styles.input}
                    onFocus={() => setIsOpen(true)}
                    value={selectedOption}
                />
                {isOpen && (
                    <ul className={styles.options}>
                        {options.map((option) => (
                            <li
                                key={option.value}
                                id={'inputDropItem'}
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
