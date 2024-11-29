import { FC } from "react";
import { Link } from "react-router";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.scss";

const Header: FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    return (
        <header className={styles.header}>
            <Link to={"/"} className={styles.logo}>
                F
            </Link>
            <nav className={styles.nav}>
                <select
                    className={styles.dropdown}
                    name="lang"
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>
                <Link
                    to={"https://t.me/findfaceit_bot"}
                    className={styles.button}
                >
                    {t("bot")}
                    <Send size={20} />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
