import logo from '../../assets/logo.svg';
import styles from './styles.module.css';

export const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Logomarca da aplicação" />
  </header>
);
