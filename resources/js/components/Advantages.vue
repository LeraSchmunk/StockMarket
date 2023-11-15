<template>
  <div id="advantages">
    <div class="container">
      <div class="advantages">
        <div class="titleMonserrat">ПРЕИМУЩЕСТВА НАШЕГО РЕСУРСА</div>
        <div class="subtitleRoboto">Вы можете открыть проект, разместить вакансию или открыть конкурс и выбрать из предложений откликнувшихся исполнителей то, которое вас устраивает</div>
      </div>

      <div class="advantage-blocks">
        <div class="advantage-block rub">
          <img src="img/advantage-rub.png" alt="">
          <div class="titleMonserrat--small">ВЫГОДНЫЕ ЦЕНЫ</div>
        </div>
        <div class="advantage-block people">
          <img src="img/advantage-people.png" alt="">
          <div class="titleMonserrat--small">ПРОВЕРЕННЫЕ ИСПОЛНИТЕЛИ</div>
        </div>
        <div class="advantage-block time">
          <img src="img/advantage-time.png" alt="">
          <div class="titleMonserrat--small">ЭКОНОМИЯ ВРЕМЕНИ</div>
        </div>
      </div>


    </div>
  </div>

</template>

<script>
export default {
  name: "Advantages"
}
</script>
<style scoped>

#advantages{
  background-color: #2B7AF1;
  /* height: 500px; */
}

.advantages{
  color: white!important;
  display: flex;
  padding: 60px 0 54px 0;
}
.work__grid{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 380px; */
  /* padding-top: 36px; */
}

.titleMonserrat {
  color: white;
  /* font-weight: 800; */
  font-size: 40px;
  width: 430px;
  margin-right: 270px;
}

.titleMonserrat--small{
  width: 220px;
  text-align: center;
  margin-top: 24px;
}

.subtitleRoboto{
  color: white;
  font-size: 32px;
  width: 440px;

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
.advantage-blocks{
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 60px;
}
.advantage-block{
  border: 1px solid rgba(255, 255, 255, 0.336);
  border-radius: 60px;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.advantage-block img{
  height: 64px;
  /* width: 64px; */
}

.time{
  background-image: url('../img/time.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 110%;
}
.rub{
  background-image: url('../img/rub.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 116%;
  background-color: rgba(255, 255, 255, 0.1);
}

.people{
  background-image: url('../img/people.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 95%;
  background-color: rgba(255, 255, 255, 0.1);
}


</style>