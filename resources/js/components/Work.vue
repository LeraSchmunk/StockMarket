<template>
  <div id="work">
    <div class="container">
      <div class="work">
        <div class="work__percent titleMonserrat">60%</div>

        <div class="titleMonserrat work__title ">ВЫ ЭКОНОМИТЕ НА УСЛУГАХ С НАШИМ РЕСУРСОМ</div>



        <div class="work__grid">
          <div class="work-step work-step01">
            <div class="titleMonserrat--small"> 01 - СОЗДАЙТЕ ЗАДАНИЕ</div>
            <div class="subtitleRoboto">Опишите своими словами задачу, которую требуется выполнить.</div>
          </div>
        </div>

        <div class="work__grid">
          <div class="work-step work-step02">
            <div class="titleMonserrat--small">02 - ЛАБОРАТОРИИ ПРЕДЛОЖАТ УСЛУГИ И ЦЕНЫ</div>
            <div class="subtitleRoboto">Уже через пару минут вы начнете получать предложения от исполнителей, готовых выполнить ваше задание.</div>
          </div>
        </div>

        <div class="work__grid">
          <div class="work-step work-step03">
            <div class="titleMonserrat--small">03 - ВЫБЕРИТЕ ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ</div>
            <div class="subtitleRoboto">Вы сможете выбрать подходящего испонителя по разным критериям: стоимость услуг, отзывы, рейтинг.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
}
</script>
<style scoped>
#work{
  background-color: #2B7AF1;
  height: 460px;
  background-image: url('../img/%.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 40%;
}

.work{
  color: white!important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 76px 65px;
  grid-template-areas:
    "percent work__title work__title"
    "work-step01 work-step02 work-step03";
  padding: 36px 0 60px 0;

}
.percent { grid-area: percent; }
.work__title { grid-area: work__title; }
.work-step01 { grid-area: work-step01; }
.work-step02 { grid-area: work-step02; }
.work-step03 { grid-area: work-step03; }

.work__grid{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 380px; */
  /* padding-top: 36px; */
}

.work__percent {
  color: white;
  font-weight: 800;
  font-size: 120px;
}

.work__title{
  color: white;
  font-size: 32px;
  width: 540px;

}
.titleMonserrat--small{
  color: white;
  padding-bottom: 16px;
}

.subtitleRoboto{
  color: white;
  font-size: 20px;
  line-height: 130%;
}

</style>