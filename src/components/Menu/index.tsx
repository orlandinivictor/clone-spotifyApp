import styles from './styles.module.scss';
import { VscLibrary } from 'react-icons/vsc';
import { AiFillHome, AiFillPlusSquare, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';


export function Menu() {
  return (
    <div className={styles.menuDiv}>
      <a href="">
        <img src="/logo.png" alt="Logo"/>
      </a>

      <button type="button">
        <AiFillHome size={30} /><span>Início</span>
      </button>
      <button>
        <FiSearch size={30} /><span>Buscar</span>
      </button>
      <button>
        <VscLibrary size={30} /><span>Sua Biblioteca</span>
      </button>

      <div className={styles.playlists}>
        <button>
          <AiFillPlusSquare size={30} />
          <span>Criar playlist</span>
        </button>
        <button>
          <div>
            <AiFillHeart className={styles.heart} size={14} />
          </div>
          <span>Músicas Curtidas</span>
        </button>

      </div>
      <div className={styles.separator} />
    </div>
  )
}
