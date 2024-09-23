import { FC } from "react";
import styles from "./index.module.scss";

const HomePage: FC = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>FaceitFinder</h1>
            <p className={styles.subtitle}>
                Instantly retrieve CS2 Faceit players stats from a simple query.
            </p>
            <form className={styles.search}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Steam URL/Steam ID/Faceit nickname"
                />
            </form>
        </div>
    );
};

export default HomePage;
