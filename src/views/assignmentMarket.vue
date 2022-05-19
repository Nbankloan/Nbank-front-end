<template>
  <div class="loanMarket">
    <div class="nav-box">
      <div class="nav-item" :class="{'active':activeType==0}" @click="activeType = 0">
        ALL
      </div>
      <div class="nav-item" :class="{'active':activeType==1}" @click="activeType = 1">
        My Assignment
      </div>
    </div>
    <div class="all" v-show="activeType==0">
      <div class="all-list">
        <div class="oder" @click="activeType=2">
          <div class="name">
            Assignment list
          </div>
          <div style="display: flex">
            <div class="token-box">
              <div class="value">
                NBT
              </div>
              <span>Token</span>
            </div>
            <div class="balance-box">
              <div class="value">
                500,000
              </div>
              <span>Loan Amount</span>
            </div>
          </div>
          <div class="create-time">
            <div class="value">
              2022.5.20
            </div>
            <span>Loan Time</span>
          </div>
        </div>
      </div>
    </div>
    <div class="myLoan" v-show="activeType==1">
      ss
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
  }
</style>
