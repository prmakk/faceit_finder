import axios from "axios";
import { create } from "zustand";

interface IStore {
    userData: [],
    loading: boolean,
    error: string,
    fetchUserDataBySteamId: (id: string) => Promise<void>,
}

export const userStore = create<IStore>(set => ({
    userData: [],
    loading: false,
    error: '',
    fetchUserDataBySteamId: async(id) => {
        set({loading: true});
        try {
            const response = await axios.get(`https://open.faceit.com/data/v4/players?game=csgo&game_player_id=${id}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_FACEIT_API_TOKEN}`
                }
            })
            set({userData: response.data, loading: false});
        } catch (error) {
            set({error: String(error)})
        }
    },
}))