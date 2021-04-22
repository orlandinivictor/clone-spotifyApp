import styles from './styles.module.scss';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';

export function Header() {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.buttons}>
        <button className={styles.grayBackground}><IoChevronBackSharp className={styles.backButton} size={24} /></button>
        <button className={styles.grayBackground}><IoChevronForwardSharp className={styles.forwardButton} size={24} /></button>
      </div>

      <div className={styles.profile}>
        <button className={styles.upgrade}>
          FAÇA UPGRADE
        </button>

        <button className={styles.profileMenu}>
          <span><FiUser size={20} /></span>
          <span>Victor Orlandini</span>
          &#9660;
        </button>
      </div>
    </div>
  )
}
