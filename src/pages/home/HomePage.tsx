import { FC, useState } from "react";
import styles from "./index.module.scss";
import { userStore } from "../../store/store";
import UserCard from "../../components/usercard/UserCard";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";

const HomePage: FC = () => {
    const state = userStore();

    const [input, setInput] = useState<string>("");

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleSearch = () => {
        const trimmedInput = input.trim();
        const isUrl = /https?:\/\/(?:www\.)?[\w.-]+\/([\w-]+)/.test(
            trimmedInput
        );
        const isId = /^[a-zA-Z0-9-]+$/.test(trimmedInput);

        if (trimmedInput.length === 0) {
            toast.error("Input is empty");
        } else if (isUrl) {
            console.log("fetch sent");
            const parts = trimmedInput.split("/");
            const steamId =
                parts[parts.length - 1] === ""
                    ? parts[parts.length - 2]
                    : parts[parts.length - 1];
            state.fetchUserDataBySteamId(steamId);
        } else if (isId) {
            state.fetchUserDataBySteamId(input);
        }
    };

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>FaceitFinder</h1>
            <p className={styles.subtitle}>
                Instantly retrieve CS2 Faceit players stats from a simple query.
            </p>
            <form className={styles.search} onSubmit={handleSubmitForm}>
                <input
                    className={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Steam URL/Steam ID/Faceit nickname"
                />
                <button onClick={handleSearch}>Search</button>
            </form>
            <div className={styles.info}>
                {state.userMainInfo.hasOwnProperty("avatar") && <UserCard />}
                {state.loading && <Loader />}
            </div>
        </div>
    );
};

export default HomePage;
