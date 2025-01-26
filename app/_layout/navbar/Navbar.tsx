import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href='/home' className={styles.link}>
        Home
      </Link>
      <Link href='/about' className={styles.link}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
