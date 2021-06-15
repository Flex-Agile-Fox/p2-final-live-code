import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/favorites",
		name: "Favorites",
		component: Favorites,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
