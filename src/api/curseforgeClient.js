import axios from "axios";

const MOCK_MODE = !process.env.CURSEFORGE_API_KEY;

const BASE_URL = "https://api.curseforge.com";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-api-key": process.env.CURSEFORGE_API_KEY
    }
});

// Placeholder functions (no real data without key)
export async function searchMods(query) {
    const res = await api.get("/v1/mods/search", {
        params: {
            gameId: 432,
            searchFilter: query
        }
    });

    return res.data;
}

export async function searchMods(query) {
    if (MOCK_MODE) {
        return {
            data: [
                {
                    id: 1,
                    name: "Example Mod",
                    summary: "Mock data while API key is not available",
                    downloadCount: 12345
                }
            ]
        };
    }

    const res = await api.get("/v1/mods/search", {
        params: {
            gameId: 432,
            searchFilter: query
        }
    });

    return res.data;
}
