import '../styles/global.scss';

import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Menu />
          <div className={styles.content}>
            <Header />
            <Component {...pageProps} />
          </div>
      </main>
      <Player />
    </div>

  );
}

export default MyApp
