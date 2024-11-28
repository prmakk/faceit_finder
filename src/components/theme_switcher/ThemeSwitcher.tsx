import { FC } from "react";

import styles from "./index.module.scss";
import { userStore } from "../../store/store";

const ThemeSwitcher: FC = () => {
    const { theme, changeTheme } = userStore();

    return (
        <label className={styles.ui_switch}>
            <input type="checkbox" onChange={() => changeTheme(theme)} />
            <div className={styles.slider}>
                <div className={styles.circle}></div>
            </div>
        </label>
    );
};

export default ThemeSwitcher;
