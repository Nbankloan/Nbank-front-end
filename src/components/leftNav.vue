<template>
  <div class="left-nav">
    <div class="logo-box">
      <img src="../assets/img/logo.png" alt="" @click="jump()">
    </div>
    <div class="nav-list">
      <div class="item" :class="{'active': $route.path=='/Home'}" @click="$router.push('/Home')">
        <img src="../assets/img/icon1.png" alt="">
        <div class="name">Home</div>
      </div>
      <div class="item" :class="{'active': $route.path=='/LoanMarket'}" @click="$router.push('/LoanMarket')">
        <img src="../assets/img/icon2.png" alt="">
        <div class="name">Loan market</div>
      </div>
      <div class="item" :class="{'active': $route.path=='/AssignmentMarket'}" @click="$router.push('/AssignmentMarket')">
        <img src="../assets/img/icon3.png" alt="">
        <div class="name">Assignment market</div>
      </div>
      <div class="nav-footer">
        <div class="icon-list">
          <img src="../assets/img/telegram.png" alt="">
          <img src="../assets/img/github.png" alt="">
          <img src="../assets/img/medium.png" alt="">
          <img src="../assets/img/twitter.png" alt="">
          <img src="../assets/img/discord.png" alt="">
        </div>
        <div class="copyright">
          Copyright@2021 NBank
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "leftNav",
        data() {
          return{

          }
        },
        methods:{
    
        }
    }
</script>

<style lang="scss" scoped>
.left-nav{
  width: 330px;
  height: 100vh;
  background: #32263F;
  .logo-box{
    width: 100%;
    img{
      width: 150px;
      margin-top: 30px;
      margin-left: calc(50% - 75px);
    }
  }
  .nav-list{
    padding: 30px 0;
    .item{
      margin-top: 20px;
      width: 240px;
      padding: 16px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &.active{
        background: #B4386A;
        border-radius: 0px 100px 100px 0px;
      }
      img{
        width: 22px;
      }
      .name{
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .nav-footer{
    position: absolute;
    bottom: 10px;
    .icon-list{
      display: flex;
      width: 200px;

      margin: 10px 30px;
      justify-content: space-between;
      img{
        width: 26px;
      }
    }
    .copyright{
      text-align: center;
    }
  }
}
</style>
