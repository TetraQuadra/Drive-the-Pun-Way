import styles from './Button.module.css'

const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={() => onClick()} className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;