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
		meta: { requiresLogin: true },
	},
	{
		path: "/favorites",
		name: "Favorites",
		component: Favorites,
		meta: { requiresLogin: true },
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: { requiresLogin: false },
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresLogin)) {
		if (!localStorage.getItem("access_token")) {
			next({ path: "/login" });
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
