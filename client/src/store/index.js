import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:3000";

export default new Vuex.Store({
	state: {
		isLoggedIn: false,
		animals: [],
		favorites: [],
	},
	mutations: {
		SET_ISLOGGEDIN(state, payload) {
			state.isLoggedIn = payload;
		},
		SET_ANIMALS(state, payload) {
			state.animals = payload;
		},
		SET_FAVORITES(state, payload) {
			state.favorites = payload;
		},
	},
	actions: {
		isLoggedIn(context) {
			if (localStorage.getItem("access_token")) {
				context.commit("SET_ISLOGGEDIN", true);
			}
		},
		login(context, { email, password }) {
			axios({
				method: "POST",
				url: "/login",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					email,
					password,
				},
			})
				.then((data) => {
					localStorage.setItem("access_token", data.data.token);
					context.dispatch("isLoggedIn");
					router.push({ name: "Home" });
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getAnimals(context) {
			axios({
				method: "GET",
				url: "/animals",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
			})
				.then((data) => {
					context.commit("SET_ANIMALS", data.data.animals);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addToFavorite(context, payload) {
			console.log(payload);
			axios({
				method: "POST",
				url: "/favorites/" + payload,
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
			})
				.then(() => {
					context.dispatch("getFavorites");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getFavorites(context) {
			axios({
				method: "GET",
				url: "/favorites",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
			})
				.then((data) => {
					console.log(data);
					context.commit("SET_FAVORITES", data.data.favorites);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
