import { FC } from "react";

import styles from "./index.module.scss";
import { userStore } from "../../store/store";

const UserCard: FC = () => {
    const state = userStore();

    return (
        <div className={styles.card}>
            <div className={styles.main_info}>
                <img src={state.userMainInfo.avatar} alt="avatar" />
                <div className={styles.text_info}>
                    <div className={styles.row}>
                        <p className={styles.nickname}>
                            {state.userMainInfo.nickname}
                        </p>
                        <div className={styles.level}>
                            {state.userMainInfo.games.cs2.skill_level}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.data}>
                            <span>
                                {state.userMainInfo.games.cs2.faceit_elo}
                            </span>{" "}
                            ELO
                        </div>
                        <div className={styles.data}>
                            <span>
                                {
                                    state.userGameInfo.lifetime[
                                        "Average K/D Ratio"
                                    ]
                                }
                            </span>{" "}
                            K/D
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.data}>
                            Matches:{" "}
                            <span>
                                {state.userGameInfo.lifetime["Matches"]}
                            </span>
                        </div>
                        <div className={styles.data}>
                            WinRate:{" "}
                            <span>
                                {state.userGameInfo.lifetime["Win Rate %"]}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.links}>
                <a
                    href={`https://www.faceit.com/en/players/${state.userMainInfo.nickname}`}
                    target="_blank"
                >
                    <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M32 3.599c0-0.13-0.135-0.266-0.135-0.266-0.13 0-0.13 0-0.266 0.135-2.667 4.13-5.464 8.266-8.13 12.531h-23.203c-0.266 0-0.401 0.401-0.13 0.531 9.599 3.604 23.599 9.068 31.333 12.135 0.266 0.135 0.531-0.135 0.531-0.266z"></path>{" "}
                        </g>
                    </svg>
                    Faceit
                </a>
                <a
                    href={`https://steamcommunity.com/profiles/${state.userMainInfo.steam_id_64}`}
                    target="_blank"
                >
                    <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>steam</title>
                            <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z"></path>{" "}
                        </g>
                    </svg>
                    Steam
                </a>
            </div>
        </div>
    );
};

export default UserCard;
