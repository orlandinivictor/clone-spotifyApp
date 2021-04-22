import styles from './styles.module.scss';
import { TiArrowShuffle } from 'react-icons/ti';
import { IoRepeat } from 'react-icons/io5';
import { HiOutlineHeart } from 'react-icons/hi';
import { BiMicrophone, BiVolumeFull } from 'react-icons/bi';
import { MdPictureInPictureAlt, MdVideoLabel } from 'react-icons/md';
import { RiSkipBackMiniFill, RiPlayMiniFill, RiPauseMiniFill, RiSkipForwardMiniFill, RiPlayList2Fill } from 'react-icons/ri';
import React from 'react';

export function Player() {
  return (
    <div className={styles.playerDiv}>

      <div className={styles.currentSong}>
        <img src="/teste.jpg" alt="Capa album"/>
        <div className={styles.songDetails}>
          <h3>Sexy Lady</h3>
          <span>Costa Gold, Pedro Lotto</span>
        </div>
        <div className={styles.songIcons}>
          <span><HiOutlineHeart size={20} /></span>
          <span><MdPictureInPictureAlt size={20} /></span>
        </div>
      </div>

      <div className={styles.player}>
        <div className={styles.playerButtons}>
          <button>
            <TiArrowShuffle size={20} />
          </button>
          <button>
            <RiSkipBackMiniFill size={20} />
          </button>
          <button className={styles.mainButton}>
            <span><RiPlayMiniFill size={20} /></span>
          </button>
          <button>
            <RiSkipForwardMiniFill size={20} />
          </button>
          <button>
            <IoRepeat size={20} />
          </button>
        </div>

        <div className={styles.playerContent}>
          <span>00:00</span>
            <div className={styles.slider}>
              <div className={styles.emptySlider}></div>
            </div>
          <span>00:00</span>
        </div>
      </div>

      <div className={styles.utils}>
        <span className={styles.rotated}><BiMicrophone size={18} /></span>
        <span><RiPlayList2Fill size={18} /></span>
        <span><MdVideoLabel size={18} /></span>
        <span><BiVolumeFull size={18} /></span>
        <div className={styles.slider}>
          <div className={styles.emptySlider}></div>
        </div>
      </div>

    </div>
  )
}
