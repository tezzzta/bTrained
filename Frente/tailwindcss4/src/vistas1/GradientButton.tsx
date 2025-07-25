import styles from "./Gradient.module.css";
import { ArrowBigRight } from "lucide-react";

interface GradientButtonProps {
  onClick: () => void; 
}

const GradientButton: React.FC<GradientButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={onClick}>
          <span className={styles.gradient} />
          <span className={styles.content}>
            <div className={styles.flexContainer}>
              <span className={styles.text}>
                <ArrowBigRight />
              </span>
              <svg
                className={styles.icon}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default GradientButton;

