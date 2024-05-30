import User from '../models/user';

export const actions = {
    fetchUsers: async () => {
        try {
            return await User.findAll();
        } catch (error) {
            console.error('Error fetching users:', error);
            return []
        }
    },
};