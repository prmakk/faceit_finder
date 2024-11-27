import { FC } from "react";
import { Link } from "react-router";
import { Send } from "lucide-react";

import styles from "./index.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link to={"/"} className={styles.logo}>
                F
            </Link>
            <Link to={"https://t.me/findfaceit_bot"} className={styles.button}>
                Our Bot
                <Send size={20} />
            </Link>
        </header>
    );
};

export default Header;
