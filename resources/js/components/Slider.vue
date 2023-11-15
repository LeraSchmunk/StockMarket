<template>
  <div id="slider">
    <div class="container">
      <div class="slider">
        <div class="titleMonserrat">ЛУЧШИЕ ИСПОЛНИТЕЛИ НАШЕГО САЙТА С САМЫМ ВЫСОКИМ РЕЙТИНГОМ</div>
        <div class="subtitleRoboto ">Вы можете разместить заказ на испытания и выбрать из предложений откликнувшихся исполнителей то, которое вас устраивает</div>
        <div class="subtitleRoboto sliders">5/6</div>
      </div>
      <div class="companies">
        <div class="company-block">
          <img src="img/niistrom.png" alt="">
          <div class="stars"></div>
          <div class="company-name">УралНИИстром</div>
          <div class="company-description">Строительные лаборатории</div>
        </div>
        <div class="company-block">
          <img src="img/stroypribor.png" alt="">
          <div class="stars"></div>
          <div class="company-name">Конструкторско-технологическое бюро Стройприбор ОО</div>
          <div class="company-description">Строительные лаборатории</div>
        </div>
        <div class="company-block">
          <img src="img/betotek.png" alt="">
          <div class="stars"></div>
          <div class="company-name">БЕТОТЕК ООО. Строительная испытательная лаборато</div>
          <div class="company-description">Строительные лаборатории</div>
        </div>
        <div class="company-block">
          <img src="img/uralmoststroy.png" alt="">
          <div class="stars"></div>
          <div class="company-name">АО «УРАЛМОСТОСТРОЙ» филиал Мостоотряд №16</div>
          <div class="company-description">Строительные лаборатории</div>
        </div>
        <div class="company-block">
          <img src="img/csl.png" alt="">
          <div class="stars"></div>
          <div class="company-name">Центральная строительная лаборатория ООО (ООО «ЦСЛ)</div>
          <div class="company-description">Строительные лаборатории</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slider"
}
</script>
<style scoped>
#slider{
  background-color: #F4F5F7;
  height: 580pxpx;
  padding: 65px 0 60px 0;

}
.titleMonserrat{
  width: 900px;
  padding-right: 50px;
}

.subtitleRoboto{
  width: 686px;
}
.slider{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.sliders {
  width: 330px;
  text-align: right;
}
.companies {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-top: 60px;
}
.company-block {
  background-color: #E9ECF0;
  border-radius: 24px;
  height: 221px;
  width: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left:20px ;
}

.company-block img{
  height: 64px;
  width: 64px;
  /* padding: 20px 0 0 20px; */
}
.stars {
}
.company-name {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
}
.company-description {
  font-family: Roboto, sans-serif;
  font-size: 16px;

}


</style>