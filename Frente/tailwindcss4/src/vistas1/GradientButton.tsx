import styles from "./Gradient.module.css";

type GradientButtonProps = {
  onClick: () => void;
};



const GradientButton: React.FC<GradientButtonProps> = ({onClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          <span className={styles.gradient} />
          <span className={styles.content}>
            <div className={styles.flexContainer}>
              <span className={styles.text}>Save :D</span>
              <svg className={styles.icon} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
