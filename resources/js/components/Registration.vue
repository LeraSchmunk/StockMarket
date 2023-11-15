<template>
    <div id="registration">
        <Header></Header>
        <div class="containerReg">
            <form class="registrationForm" @submit.prevent="registration">
                <div class="chooseRegistration">
                    <div class="activeBtn" @click="setActive('tab-1')">
                        <button
                            class="btn customer"
                            @click="customerBtn"
                            :class="{ active: isActive('tab-1') }"
                        >
                            Зарегистрироваться как Заказчик
                        </button>
                    </div>

                    <div class="activeBtn" @click="setActive('tab-2')">
                        <button
                            class="btn executor"
                            @click="executorBtn"
                            :class="{ active: isActive('tab-2') }"
                        >
                            Зарегистрироваться как Исполнитель
                        </button>
                    </div>
                </div>
                <input
                    v-if="inputMailVisible"
                    type="email"
                    placeholder="   * example@example.ru"
                    id="email"
                    v-model.trim="email"
                />
                <input
                    v-if="inputNumberVisible"
                    type="number"
                    placeholder="   * Введите ИНН"
                    id="inn"
                    v-model.trim="inn"
                />
                <input
                    v-if="inputCompanyVisible"
                    type="text"
                    placeholder="   * Введите название компании"
                    id="company"
                    v-model.trim="company"
                />
                <input
                    v-if="inputPasswordVisible"
                    type="password"
                    placeholder="   * Введите пароль"
                    id="password"
                    v-model.trim="password"
                />

                <button
                    v-if="regBtnVisible"
                    type="submit"
                    id="btn"
                    @click="sendRegistration"
                    class="send-btn btns"
                >
                    Зарегистрироваться
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
    name: "Registration",
    components: { Header, Footer },
    data() {
        return {
            name: "",
            surname: "",
            company: "",
            number: "",
            email: "",
            inputMailVisible: true,
            inputNumberVisible: false,
            inputCompanyVisible: false,
            inputPasswordVisible: true,
            regBtnVisible: true,
            activeTab: "tab-1",
        };
    },
    methods: {
        customerBtn() {
            (this.inputMailVisible = true),
                (this.inputPasswordVisible = true),
                (this.regBtnVisible = true);
            (this.inputNumberVisible = false),
                (this.inputCompanyVisible = false);
        },
        executorBtn() {
            (this.inputMailVisible = true),
                (this.inputPasswordVisible = true),
                (this.regBtnVisible = true),
                (this.inputNumberVisible = true),
                (this.inputCompanyVisible = true);
        },
        setActive(tab) {
            this.activeTab = tab;
        },
        isActive(tab) {
            return this.activeTab === tab;
        },
    },
};
</script>

<style scoped>
.containerReg {
    background-image: url("../../../public/img/banerLower-woman.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 60%;
    height: 74vh;
}

.chooseRegistration {
    display: flex;
    justify-content: space-between;
    font-family: Montserrat, sans-serif;
}
button {
    height: 40px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
}
.active {
    background-color: #174dff9a;
    color: white;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    border: 2px solid red;
}
.navbar__logo {
    color: white;
}

.navbar__list {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
}

.li-btn {
    margin-right: 32px;
}

.navbar__forms {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.registrationForm {
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
