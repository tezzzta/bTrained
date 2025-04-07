import styles from "./mj.module.css"; 

const MjCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.fl}>
          <div className={styles.fullscreen}>
            <svg className={styles.fullscreen_svg} viewBox="0 0 100 100">
              <path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004z" />
            </svg>
          </div>
        </div>
        <div className={styles.card_content}>
          <button>Code to Infinity!</button>
        </div>
        <div className={styles.card_back}></div>
      </div>
      <div className={styles.data}>
        <div className={styles.img}>
          <svg viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g strokeLinecap="butt" fill="none" strokeWidth="2.00">
              <path d="M 14.06 0.00 Q 13.33 4.09 13.93 7.52 A 1.04 1.02 -78.7 0 0 14.37 8.19 L 32.87 20.19" stroke="#59afb1" />
              <path d="M 32.87 20.19 L 42.25 26.79" stroke="#4fa6a8" />
              <path d="M 42.25 26.79 C 41.40 28.26 24.14 34.92 21.32 36.20" stroke="#69cbc0" />
              <path d="M 21.32 36.20 Q 15.81 38.21 11.00 41.21" stroke="#6fcdbb" />
              <path d="M 11.00 41.21 L 9.75 40.96" stroke="#5ec8ab" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};



export default MjCard;
