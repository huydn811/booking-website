import axios from '../servives';

// eslint-disable-next-line
export const chatApi = {
	getAllChatRoom: async () => {
		try {
			const res = await axios.get(
				'/chat/get-all-chatroom',
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	getById: async (id) => {
		try {
			const res = await axios.get(
				`/chat/get-all-chatroom/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	addMessage: async (data) => {
		try {

			const res = await axios.post(
				`/chat/add-message`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},


	addChatRoom: async (data) => {
		try {
			const res = await axios.post(
				`/chat/create-chatroom`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	getAllMess: async () => {
		try {
			const res = await axios.get(
				`/chat/get-all-message`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},


	getChatRoomById: async (id) => {
		try {
			const res = await axios.get(
				`/chat/get-chatroom/${id}`,
				{
					Authorization: `bearer ${localStorage.getItem('token')}`
				}
			);
			return res;

		} catch (error) {
			throw error;
		}
	}

};
