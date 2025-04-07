const pool = require('../DataBases/db');

const TransitionImageRepository = {
    create: async (transitionId, imageUrl, description) => {
        try {
            const [result] = await pool.execute(
                'INSERT INTO transition_images (transition_id, image_url, description) VALUES (?, ?, ?)',
                [transitionId, imageUrl, description]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error creating transition image:", error);
            throw error;
        }
    },
};

module.exports = TransitionImageRepository;