const express = require('express');
const { getPinterestData } = require('../modules/pinterestService');

const router = express.Router();

router.get('/', async (req, res) => {
    const { query, limits } = req.query;
    try {
        const data = await getPinterestData(query, limits);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
