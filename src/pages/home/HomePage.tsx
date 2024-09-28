import { FC, useState } from "react";
import styles from "./index.module.scss";
import { userStore } from "../../store/store";
import UserCard from "../../components/usercard/UserCard";

const HomePage: FC = () => {
    const state = userStore();

    const [input, setInput] = useState<string>("");

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleSearch = () => {
        if (input.trim() === "") {
            state.setError("Input empty");
        } else {
            console.log("fetch sent");
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
                {state.error.length > 0 && <p>{state.error}</p>}
                {state.loading && <p>Loading...</p>}
            </div>
        </div>
    );
};

export default HomePage;
