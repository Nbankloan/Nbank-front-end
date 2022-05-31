<template>
  <div class="home">
    <div class="nav-box">
      <div class="nav-item" :class="{'active':activeType==0}" @click="activeType = 0">
        My Bank
      </div>
      <div class="nav-item" :class="{'active':activeType==1}" @click="activeType = 1">
        ALL Bank
      </div>
    </div>
    <div class="myBank" v-show="activeType==0">
      <div class="operate-btn" style="margin: 20px 0;width: 120px;height: 50px;line-height: 50px;background: #B4386A;" @click="jump()" >
        CREATE
      </div>
    </div>
    <div class="allBank" v-show="activeType==1">
      <div class="bank-list">
        <div class="bank" @click="activeType=2">
          <div class="name">
            BANK NAME
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
              <span>My Balance</span>
            </div>
          </div>
          <div class="create-time">
            <div class="value"> 
              December 24, 2021
            </div>
            <span>Create Time</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bank-detail" v-show="activeType!=0&&activeType!=1">
      <div class="header-box">
        <img src="../assets/img/eth_icon.png" alt="">
        <div class="content">
          <div class="name">
            Amount
          </div>
          <div class="value">
            2,366,886,268.7933 R
          </div>
        </div>
        <button class="operate-btn" @click="isShowStake=true">
          Stake
        </button>
      </div>
      <div class="list-title">
        My RBD-Deposiot Toke
      </div>
      <div class="list-box">
        <div class="list-header">
          <div class="header-item">
            Token ID
          </div>
          <div class="header-item">
            Initial generator
          </div>
          <div class="header-item">
            Holder
          </div>
          <div class="header-item">
            Lock position type
          </div>
          <div class="header-item">
            Contains
          </div>
          <div class="header-item">
            Locked time
          </div>
          <div class="header-item">
            Expiration time
          </div>
          <div class="header-item">
            Remaining days
          </div>
          <div class="header-item">
            Withdrawal
          </div>
        </div>
        <div class="list-row">

        </div>
      </div>
    </div>
    <div class="dialog-box" v-show="isShowStake">
      <div class="mask" @click="isShowStake=false"></div>
      <div class="dialog">
        <div class="dialog-header">
          <div class="name"  >
            Stake
          </div>
          <div class="close" style="font-size: 20px;cursor: pointer" @click="isShowStake=false">
            x
          </div>
        </div>
        <div class="dialog-content">
          <div class="stake-type">
            <strong>
              Stake Type
            </strong>
            <select v-model="selectTypeIdx" >
              <option selected value="0">12Month</option>
              <option value="1"> 6Month</option>
            </select>
          </div>
          <div class="stake-assets">
            <div class="name">
              <strong> Stake assets</strong>
            </div>
            <input type="text">
          </div>
          <div class="operate-btn">
            STAKE
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home",
      data(){
         return{
           activeType:0,
           selectTypeIdx:0,
           isShowStake:false
         }
      },
      methods:{
        jump(){
          console.log(111)
          this.$router.push({path:'/createNFT'})
        }
      }
    }
</script>

<style scoped lang="scss">
  .home {
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
        background: rgba(#000,0.3);
      }
      .dialog{
        margin: 20vh auto 0;
        position: relative;
        width: 420px;
        background: #32263F;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
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
            select{
              width: 200px;
            }
          }
          .stake-assets {
            .name{
              line-height: 60px;
            }
            input{
              width: 380px;
              height: 50px;
              background: #291D36;
              box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
              border-radius: 10px;
              border: none;
              color: #fff;
              padding: 0 20px;
              font-size: 16px;
            }
          }
          .operate-btn{
            width: 100%!important;
            background: #B4386A!important;
          }
        }
      }
    }
    .bank-list{
      .bank{
        margin: 20px 30px 0 0 ;
        width: 340px;
        height: 274px;
        background: #32263F;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.1);
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
        .create-time{
          width: 320px;
          height: 97px;
        }
      }
    }
    .nav-box{
      display: flex;
      width: 280px;
      height: 50px;
      background: #291D36;
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.1);
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
    .header-box {
      display: flex;
      width: 100%;
      margin: 30px 0;
      background: #32263F;
      border-radius: 5px;
      justify-content: space-between;
      border: 1px solid rgba(255, 255, 255, 0.1);
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

      .operate-btn{
        margin: 0!important;
        width: 130px!important;
      }
    }
    .list-title{
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      color: #FFFFFF;
    }
    .list-box{
      width: 100%;
      background: #32263F;
      border-radius: 5px;
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      .list-header{
        height: 30px;
        margin: 10px auto;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        .header-item{
          color: #9D94A6;
        }
      }
      .list-row{
        height: 60px;
        margin: 10px auto;
        line-height: 60px;
        background: #291D36;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
