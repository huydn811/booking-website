import axios from '../servives';

// eslint-disable-next-line
export const authApi = {
  login: async (data) => {
    try {
      const res = await axios.post(
        '/login',
        data,
      );
      return res;
    } catch (error) {
      throw error;
    }
  },

  register: async (data) => {
    try {
      const res = await axios.post(
        '/register',
        data

      );
      return res;
    } catch (error) {
      throw error;
    }
  },

};
