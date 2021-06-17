import axios from '../servives';


// eslint-disable-next-line
export const empApi = {
	getAll: async () => {
		try {
			const res = await axios.get(
				'/employee/get-all-employee',
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	addUser: async (data) => {
		try {
			const res = await axios.post(
				'/employee/add-employee',
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},


	getById: async (id) => {
		try {
			const res = await axios.get(
				`/employee/get-employeeid/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	updateUser: async ({ id, data }) => {
		try {
			const res = await axios.put(
				`/employee/update-employee/${id}`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},



	delUser: async (id) => {
		try {
			const res = await axios.delete(
				`/employee/delete-employee/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},
};
