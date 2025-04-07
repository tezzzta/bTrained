const pool = require('../DataBases/db');

const TransitionRepository = {
    create: async (transitionData) => {
        try {
            const [result] = await pool.execute(
                'INSERT INTO transiciones (user_id, title, description) VALUES (?, ?, ?)',
                [transitionData.user_id, transitionData.title, transitionData.description]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error creating transition:", error);
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const [rows] = await pool.execute('SELECT * FROM transiciones WHERE id = ?', [id]);
            return rows[0]; // Devuelve la transición o undefined si no se encuentra
        } catch (error) {
            console.error("Error getting transition by ID:", error);
            throw error;
        }
    },

    getAll: async () => {
        try {
            const [rows] = await pool.execute('SELECT * FROM transiciones');
            return rows;
        } catch (error) {
            console.error("Error getting all transitions:", error);
            throw error;
        }
    },

    update: async (id, transitionData) => {
        try {
            const [result] = await pool.execute(
                'UPDATE transiciones SET user_id = ?, title = ?, description = ? WHERE id = ?',
                [transitionData.user_id, transitionData.title, transitionData.description, id]
            );
            return result.affectedRows;
        } catch (error) {
            console.error("Error updating transition:", error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const [result] = await pool.execute('DELETE FROM trancisiones WHERE id = ?', [id]);
            return result.affectedRows;
        } catch (error) {
            console.error("Error deleting transition:", error);
            throw error;
        }
    },
};

module.exports = TransitionRepository;