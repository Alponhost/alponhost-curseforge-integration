import express from "express";
import { getMods } from "../services/modService.js";

const router = express.Router();

router.get("/search", async (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            success: false,
            message: "Query parameter 'q' is required"
        });
    }

    try {
        const mods = await getMods(q);

        res.json({
            success: true,
            data: mods
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch mods"
        });
    }
});

export default router;
