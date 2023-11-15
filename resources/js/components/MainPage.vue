<template>
    <Header></Header>
    <Baner></Baner>
    <Work></Work>
    <Slider></Slider>
    <Projects></Projects>

    <Advantages></Advantages>
    <BanerLower></BanerLower>
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import Baner from "./Baner.vue";
import Work from "./Work.vue";
import Slider from "./Slider.vue";
import Advantages from "./Advantages.vue";
import Projects from "./Projects.vue";
import BanerLower from "./BanerLower.vue";
import Footer from "./Footer.vue";
export default {
    name: "MainPage",
    components: {
        Footer,
        BanerLower,
        Advantages,
        Projects,
        Slider,
        Work,
        Baner,
        Header,
    },
};
</script>

<style scoped></style>
