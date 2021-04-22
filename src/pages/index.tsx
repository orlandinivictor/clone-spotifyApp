import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeDiv}>
      <h2>Tocado Recentemente</h2>

      <div className={styles.albuns}>
        <a href="">
          <div className={styles.album}>
            <img className={styles.artist} src="/album-image-CostaGold.jpg" alt="Costa Gold"/>
            <h4>Costa Gold</h4>
            <span>Artista</span>
          </div>
        </a>

        <a href="">
          <div className={styles.album}>
            <img src="/album-image-AUGE.jpg" alt="AUGE"/>
            <h4>AUGE</h4>
            <span>Costa Gold</span>
          </div>
        </a>
      </div>

      <h2>Além das Manchetes</h2>

      <div className={styles.albuns}>
        <a href="">
          <div className={styles.album}>
            <img className={styles.playlist} src="/album-image-Manual-do-Homem.jpg" alt="Manual do Homem"/>
            <h4>Manual do Homem...</h4>
            <span>Pod360</span>
          </div>
        </a>

        <a href="">
          <div className={styles.album}>
            <img className={styles.playlist} src="/album-image-Praia-dos-Ossos.jpeg" alt="Praia dos Ossos"/>
            <h4>Praia dos Ossos</h4>
            <span>Rádio Novelo</span>
          </div>
        </a>

        <a href="">
          <div className={styles.album}>
            <img className={styles.playlist} src="/album-image-Amor.jpg" alt="Educação por Amor"/>
            <h4>Educação Por Amor</h4>
            <span>Educação Por Amor</span>
          </div>
        </a>

        <a href="">
          <div className={styles.album}>
            <img className={styles.playlist} src="/album-image-Passageiros.jpg" alt="Atenção, Passageiros"/>
            <h4>Atenção, Passageiros</h4>
            <span>Globoplay</span>
          </div>
        </a>

        <a href="">
          <div className={styles.album}>
            <img className={styles.playlist} src="/album-image-Views.jpg" alt="Views with David"/>
            <h4>VIEWS with David...</h4>
            <span>Cadence13</span>
          </div>
        </a>
      </div>
    </div>
  )
}
