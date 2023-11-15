<template>
    <div id="navbar">
        <div class="navbar container">
            <div class="navbar__logo btnBlue">РИЛ</div>
            <ul class="navbar__list">
                <li class="li-btn">Политика конфиденциальности</li>
                <li class="li-btn">Условия использования</li>
                <li class="li-btn">Обработка данных</li>
            </ul>
            <div class="navbar__end">@2023рилрф</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
#navbar {
    height: 62px;
    width: 100%;
    /* position: absolute; */
    /* bottom: 0; */
    background-color: #eaecf0;
}

.navbar {
    color: #00000040;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
}
.navbar__logo {
    color: white;
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
    color: #2b7af1;
    background-color: #2b7af10a;
    font-family: SpaceGrotesk, sans-serif;
}
</style>
