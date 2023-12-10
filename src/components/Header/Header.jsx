import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navWrapper}>

                <nav>
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/"> <img className={styles.logo} width={25} src={logo} alt="" /> Home</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Catalog</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
