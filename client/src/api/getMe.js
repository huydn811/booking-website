import axios from '../servives';


// eslint-disable-next-line
export const getMeApi = {
	getMe: async () => {
		try {
			const res = await axios.get(
				'/user/get-me'
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

};
