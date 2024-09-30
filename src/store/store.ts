import axios from "axios";
import { create } from "zustand";

interface IStore {
    userMainInfo: any;
    userGameInfo: any;
    userSteamId: number;
    userFaceitId: string;
    loading: boolean;
    error: string;
    setError: (error: string) => void;
    fetchUserDataBySteamId: (id: string) => Promise<void>;
}

export const userStore = create<IStore>((set) => ({
    userMainInfo: [],
    userGameInfo: [],
    loading: false,
    userSteamId: 0,
    userFaceitId: "",
    error: "",
    setError: (error) => {
        set({ userMainInfo: [], error: error });
    },
    fetchUserDataBySteamId: async (id) => {
        set({ userMainInfo: [], loading: true, error: "" });
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
        } catch (error) {
            console.error("Request error:", error);
            set({
                error: "User not found",
                loading: false,
            });
        }
    },
}));
