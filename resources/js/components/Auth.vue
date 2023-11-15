<template>
    <div id="auth">
        <Header></Header>
        <div class="containerAuth">
            <form class="authForm" @submit.prevent="auth">
                <input
                    type="email"
                    placeholder="   * example@example.ru"
                    id="email"
                    v-model.trim="email"
                />
                <input
                    type="password"
                    placeholder="   * Введите пароль"
                    id="password"
                    v-model.trim="password"
                />

                <button
                    type="submit"
                    id="btn"
                    @click="sendAuth"
                    class="send-btn btns"
                >
                    Авторизоваться
                </button>
            </form>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "Auth",
    components: { Header, Footer },
    data() {
        return {
            email: "",
            password: "",
        };
    },
};
</script>

<style scoped>
.containerAuth {
    background-image: url("../../../public/img/banerLower-woman.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 60%;
    height: 74vh;
}

.authForm {
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: 40px auto;
}
.send-btn {
    height: 40px;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    background-color: #174dff9a;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
}

input {
    margin: 15px 0;
    height: 40px;
    border-radius: 10px;
}
</style>
