import { FC } from "react";

import styles from "./index.module.css";

const Loader: FC = () => {
    return (
        <div className={`${styles.spinner} ${styles.center}`}>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
            <div className={styles.spinner_blade}></div>
        </div>
    );
};

export default Loader;
