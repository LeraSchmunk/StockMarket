<template>
    <div id="baner">
        <div class="baner container">
            <div class="baner-text">
                <div class="baner__title titleMonserrat">
                    Найдите лабораторию прямо здесь!
                </div>
                <div class="baner__subtitle subtitleRoboto">
                    Добро пожаловать на платформу лабораторных услуг, где
                    заказчики и исполнители находят друг друга! Здесь вы можете
                    разместить заказ на проведение исследований или предложить
                    свои навыки в области лабораторных услуг.
                </div>
                <button class="baner__btn btnBlue">Создать задание</button>
            </div>
            z
            <div class="baner__img">
                <img src="../../../public/img/about-people.png" alt="" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "baner",
};
</script>
<style scoped>
#baner {
    background-color: #f4f5f7;
    background-image: url("../img/baner-cloud.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 50%;
}

.baner-text {
    width: 520px;
    padding: 101px 0 108px 0;
}
.baner__title {
    font-weight: 800;
    font-size: 60px;
    text-transform: uppercase;
}
.baner__subtitle {
    font-size: 16px;
    margin: 32px 0 40px 0;
}
.baner {
    display: flex;

    padding-top: 38px;
}

.baner__img {
    position: relative;
    left: -200px;
}
</style>
