<template>
  <div class="loanMarket">
    <div class="nav-box">
      <div class="nav-item" :class="{'active':activeType==0}" @click="activeType = 0">
        ALL
      </div>
      <div class="nav-item" :class="{'active':activeType==1}" @click="activeType = 1">
        My Loan
      </div>
    </div>
    <div class="all" v-show="activeType==0">
      <div class="all-list">
        <div class="oder" @click="activeType=2">
          <div class="name">
            Loan list
          </div>
          <div style="display: flex">
            <div class="token-box">
              <div class="value">
                BTC
              </div>
              <span>Token</span>
            </div>
            <div class="balance-box">
              <div class="value">
                200,000
              </div>
              <span>Loan Amount</span>
            </div>
          </div>
          <div class="create-time">
            <div class="value">
              2022.5.19
            </div>
            <span>Loan Time</span>
          </div>
        </div>
      </div>
    </div>
    <div class="myLoan" v-show="activeType==1">
      ss
    </div>
      <div class="loan-detail" v-show="activeType!=0&&activeType!=1">
        <div class="header-box">
          <img src="../assets/img/eth_icon.png" alt="">
          <div class="content">
            <div class="name">
              Amount
            </div>
            <div class="value">
              23 NBT
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-box" v-show="isShowBuy">
        <div class="mask" @click="isShowBuy=false"></div>
        <div class="dialog">
          <div class="dialog-header">
            <div class="name">
              Stake
            </div>
            <div class="close" style="font-size : 20px;cursor:pointer" @click="isShowBuy=false"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "loanMarket",
        data(){
          return{
            activeType:0,
          }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
  .loanMarket {
    .nav-box{
      display: flex;
      width: 280px;
      height: 50px;
      background: #291D36;
      border-radius: 5px;
      border: 1px solid rgba(255,255,255,0.1);
      .nav-item{
        width: 140px;
        height: 100%;
        line-height: 50px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        &.active{
          background: #B4386A;
        }
      }
    }
    .all-list{
      .dialog-box{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        .mask{
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba($color: #000, $alpha: 0.3);
        }
        .dialog{
          margin: 20vh auto 0;
          position: relative;
          width: 420px;
          background: #32263F;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 1;
          .dialog-header{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding: 0 20px;
            background: #291D36;
            border-radius: 10px 10px 0px 0px;
          }
          .dialog-content{
            padding: 20px;
            .stake-type{
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            select{
              width: 200px;
            }
          }
        }
      }
      .oder{
        margin: 20px 30px 0 0;
        width: 340px;
        height: 274px;
        background: #32263F;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0.1);
        cursor: pointer;
        .name{
          width: 340px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #B4386A;
          border-radius: 5px;
          font-weight: bold;
        }
        .token-box,.balance-box,.create-time{
          margin: 10px 10px 0px 10px;
          width: 155px;
          height: 100px;
          background: #291D36;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .value{
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
    .header-box {
      display: flex;
      width: 100%;
      margin: 30px 0;
      background: #32263F;
      border-radius: 5px;
      justify-content: space-between;
      border: 1px solid rgba(255,255,255,0.1);
      align-items: center;
      padding: 40px;
      img{
        width: 50px;
        height: 50px;
      }
      .content {
        margin: 0 30px;
        flex: 1;
        .name{
          color: #999;
          line-height: 30px;
        }
        .value{
          height: 40px;
          font-size: 34px;
          font-weight: bold;
          color: #FF579B;
          line-height: 40px;
        }
      }
    }
  }
</style>
