<template>
    <div id="header" class="container fontInter">
        <div class="navbar__logo btnBlue">
            <button @click="goToMainPage">РИЛ</button>
        </div>
        <ul class="navbar__list">
            <li class="li-btn">Все задания</li>
            <li class="li-btn">Лаборатории</li>
            <li class="li-btn">Категории</li>
            <li class="li-btn">Статистика</li>
            <li class="li-btn">Карта</li>
        </ul>
        <div class="navbar__forms">
            <div class="authorization-form">
                <button
                    @click="goToAuth"
                    class="authorization-form-btn fontInter"
                >
                    Вход
                </button>
            </div>
            <div class="registration-form">
                <button
                    @click="goToRegistration"
                    class="authorization-form-btn fontInter"
                >
                    Регистрация
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router";
export default {
    name: "Header",
    methods: {
        goToRegistration() {
            router.push({ name: "Registration" });
        },
        goToAuth() {
            router.push({ name: "Auth" });
        },
        goToMainPage() {
            router.push({ name: "MainPage" });
        },
    },
};
</script>

<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
}
.navbar__logo {
    color: white;
}
.navbar__logo button {
    border: none;
    background-color: transparent;
    color: white;
    font-family: SpaceGrotesk, sans-serif;
}

.navbar__list {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.li-btn {
    margin-right: 32px;
}

.navbar__forms {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.authorization-form {
}
.authorization-form-btn {
    border: none;
    background-color: white;
    margin-right: 23px;
}
.registration-form {
}
.registration-form-btn {
    color: white;
}
.btnBlue {
    font-family: SpaceGrotesk, sans-serif;
}
</style>
