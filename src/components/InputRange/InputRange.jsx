import React, { useEffect, useState } from 'react';
import styles from './InputRange.module.css';

function InputRange({ onChange, label = 'Set range' }) {
    const [range, setRange] = useState({
        min: null,
        max: null
    });

    const handleChange = (e) => {
        setRange({
            ...range,
            [e.target.getAttribute('name')]: parseInt(e.target.value)
        });
    };

    useEffect(() => {
        onChange(range)
    }, [range])


    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputRange}>
                <input
                    placeholder='From'
                    type="number"
                    name="min"
                    min={0}
                    max={10000}
                    value={range.min || ''}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    placeholder='To'
                    type="number"
                    name="max"
                    min={0}
                    max={10000}
                    value={range.max || ''}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
}

export default InputRange;
