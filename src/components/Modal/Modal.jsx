import CloseButton from 'components/CloseButton/CloseButton';
import LinkCustom from 'components/LinkCustom/LinkCustom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/adverts/slice';
import styles from './Modal.module.css';

function Modal({ data }) {
    const dispatch = useDispatch()

    const onClose = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(closeModal())
        }
    }

    useEffect(() => {
        const onKeyDown = e => {
            if (e.code === 'Escape') {
                dispatch(closeModal())
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [dispatch]);

    const Characteristics = ({ data }) => {
        return (
            <div className={styles.characteristics}>
                <ul>
                    <li>{data.city}</li>
                    <li>{data.country}</li>
                    <li>Id: {data.id}</li>
                    <li>Year: {data.year}</li>
                    <li>Type: {data.type}</li>
                    <li>Fuel consumption: {data.fuelConsumption}</li>
                    <li>Engine size: {data.engineSize}</li>
                </ul>
            </div>
        )
    }

    const Accessories = ({ data }) => {
        return (
            <div className={styles.accessories}>
                <h3 className={styles.secondaryHeader}>Accessories and functionalities:</h3>
                <ul>
                    {data.accessories.map((characteristic) => (
                        <li key={characteristic}>
                            {characteristic}
                        </li>
                    ))}
                </ul>
                <ul>
                    {data.functionalities.map((characteristic) => (
                        <li key={characteristic}>
                            {characteristic}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const RentalConditions = ({ data }) => {
        const array = data.rentalConditions.split('\n');
        return (
            <div className={styles.rentalConditions}>
                <h3 className={styles.secondaryHeader}>Rental conditions:</h3>
                <ul>
                    {array.map((characteristic, index) => {
                        const [firstHalf, secondHalf] = characteristic.split(':');
                        return (
                            <li key={index}>
                                {firstHalf}
                                {secondHalf ? <>: <span>{secondHalf}</span></> : null}
                            </li>
                        );
                    })}
                    <li>Mileage: <span>{data.mileage.toLocaleString('en-US', { useGrouping: true })}</span></li>
                    <li>Price: <span>{data.rentalPrice}</span></li>
                </ul>
            </div>
        );
    };


    return (
        <div onClick={(e) => onClose(e)} className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img src={data.img} alt={data.description} />
                </div>
                <h2 className={styles.header}>{data.make} <span>{data.model}</span>, {data.year}</h2>
                <Characteristics data={data} />
                <p className={styles.description}>{data.description}</p>
                <Accessories data={data} />
                <RentalConditions data={data} />
                <LinkCustom className={styles.buttonRent} to={'tel:+380730000000'}>Rental car</LinkCustom>
                <CloseButton onClick={(e) => onClose(e)} className={styles.closeButton} />
            </div>
        </div>
    );
}

export default Modal;
