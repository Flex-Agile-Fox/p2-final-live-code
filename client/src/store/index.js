import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:3000";

export default new Vuex.Store({
	state: {
		isLoggedIn: false,
	},
	mutations: {
		SET_ISLOGGEDIN(state, payload) {
			state.isLoggedIn = payload;
		},
	},
	actions: {
		login(context, { email, password }) {
			console.log(email, password);
			axios({
				method: "POST",
				url: "/login",
				data: {
					email,
					password,
				},
			})
				.then((data) => {
					localStorage.setItem("access_token", data.data.token);
					context.commit("SET_ISLOGGEDIN", true);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
