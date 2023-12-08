import styles from './Link.module.css'

const Link = ({ href = '#', children, className, ...props }) => {
    return (
        <a href={href} className={`${styles.button} ${className}`} {...props}>
            {children}
        </a>
    );
};

export default Link;