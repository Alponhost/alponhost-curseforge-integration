import { searchMods } from "../api/curseforgeClient.js";

export async function getMods(query) {
    const data = await searchMods(query);

    return data.data.map(mod => ({
        id: mod.id,
        name: mod.name,
        summary: mod.summary,
        downloads: mod.downloadCount
    }));
}
