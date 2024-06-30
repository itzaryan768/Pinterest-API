const axios = require('axios');

async function getPinterestData(query, limits) {
    try {
        const response = await axios.get(`https://api-pinterest-v1.onrender.com/api/pinterest?query=${query}&limits=${limits}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPinterestData
};
