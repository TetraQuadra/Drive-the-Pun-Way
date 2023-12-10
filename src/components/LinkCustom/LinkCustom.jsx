import styles from './LinkCustom.module.css'
import { Link } from 'react-router-dom';

const LinkCustom = ({ to = '#', children, className, ...props }) => {
    return (
        <Link to={to} className={`${styles.button} ${className}`} {...props}>
            {children}
        </Link>
    );
};

export default LinkCustom;