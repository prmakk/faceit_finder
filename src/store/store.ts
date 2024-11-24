import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

interface IStore {
    userMainInfo: any;
    userGameInfo: any;
    userSteamId: number;
    userFaceitId: string;
    loading: boolean;
    fetchUserDataBySteamId: (id: string) => Promise<void>;
    fetchUserDataByFaceitNickname: (nickname: string) => Promise<void>;
}

export const userStore = create<IStore>((set) => ({
    userMainInfo: [],
    userGameInfo: [],
    loading: false,
    userSteamId: 0,
    userFaceitId: "",
    fetchUserDataBySteamId: async (id) => {
        set({ userMainInfo: [], loading: true });
        try {
            const response = await axios.get(
                `https://playerdb.co/api/player/steam/${id}`
            );

            const { steam64id } = response.data.data.player.meta;

            console.log("Steam64 ID:", steam64id);

            const userMainInfo = await axios.get(
                `https://open.faceit.com/data/v4/players?game=csgo&game_player_id=${steam64id}`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_FACEIT_API_TOKEN
                        }`,
                    },
                }
            );

            const userGameInfo = await axios.get(
                `https://open.faceit.com/data/v4/players/${userMainInfo.data.player_id}/stats/cs2`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_FACEIT_API_TOKEN
                        }`,
                    },
                }
            );

            set({
                userMainInfo: userMainInfo.data,
                userGameInfo: userGameInfo.data,
                loading: false,
                userSteamId: steam64id,
                userFaceitId: String(userMainInfo.data.player_id),
            });

            toast.success("Player found");
        } catch (error: any) {
            if (error.status >= 400) {
                //if we didn't find by steam URL/ID we'll try to find by faceit nickname
                await userStore.getState().fetchUserDataByFaceitNickname(id);
            } else {
                console.error("Request error:", error);
                set({
                    loading: false,
                });
                toast.error("Player not found");
            }
        }
    },
    fetchUserDataByFaceitNickname: async (nickname: string) => {
        set({ userMainInfo: [], loading: true });
        try {
            const userMainInfo = await axios.get(
                `https://open.faceit.com/data/v4/players?nickname=${nickname}`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_FACEIT_API_TOKEN
                        }`,
                    },
                }
            );

            const userGameInfo = await axios.get(
                `https://open.faceit.com/data/v4/players/${userMainInfo.data.player_id}/stats/cs2`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_FACEIT_API_TOKEN
                        }`,
                    },
                }
            );

            set({
                userMainInfo: userMainInfo.data,
                userGameInfo: userGameInfo.data,
                loading: false,
                userFaceitId: String(userMainInfo.data.player_id),
            });

            toast.success("Player found");
        } catch (error) {
            console.error("Request error:", error);
            set({
                loading: false,
            });
            toast.error("Player not found");
        }
    },
}));
