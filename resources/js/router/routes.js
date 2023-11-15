import MainPage from "../components/MainPage.vue";
import Registration from "../components/Registration.vue";
import Auth from "../components/Auth.vue";

export default [
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/auth/registration",
        name: "Registration",
        component: Registration,
    },
    {
        path: "/auth",
        name: "Auth",
        component: Auth,
    },
];
