import React, { useEffect, useState } from 'react';
import styles from './InputRange.module.css';

function InputRange({ nameMin, nameMax, onChange, label = 'Set range' }) {
    const [range, setRange] = useState({
        [nameMin]: null,
        [nameMax]: null
    });

    const handleChange = (e) => {
        setRange({
            ...range,
            [e.target.getAttribute('name')]: parseInt(e.target.value)
        });
    };

    useEffect(() => {
        onChange({ [nameMin]: range[nameMin], [nameMax]: range[nameMax] })
    }, [range, onChange, nameMax, nameMin])

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputRange}>
                <input
                    placeholder='From'
                    type="number"
                    name={nameMin}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    placeholder='To'
                    type="number"
                    name={nameMax}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
}

export default InputRange;
