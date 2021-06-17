import axios from 'axios';

const token = localStorage.getItem('token')

	// eslint-disable-next-line no-console
console.log(token, '<----');
axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token") || "";
//   if (token) {
//     config.headers.Authorization = `Bearer ` + token;
//   }

//   return config;
// });

const axiosClient = axios.create({
	baseURL: 'http://localhost:9000/api',
	// validateStatus: (status) => status >= 200 && status < 400,
});

export default axiosClient;
