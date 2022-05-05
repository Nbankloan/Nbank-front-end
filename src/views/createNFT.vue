<template>
  <div class="createNFT">
    <div class="header-box">
      <img class="header-img" src="../assets/img/create_header.png" alt="">
      <div class="header-content">
        <img src="../assets/img/logo.png" alt=""  @click="jump()">
        <ConnectWallet></ConnectWallet>
      </div>
      <div class="header-title">
        Create DAO NFT Bank
      </div>
    </div>
    <div class="content">
      <div class="input-box">
        <div class="name">
          NFT Bank Name
        </div>
        <input type="text" placeholder="Name" v-bind="nbank_name">

      </div>
      <div class="input-box">
        <div class="name">
          DAO Token Address
        </div>
        <div class="info">
          Create a new ERC-20 token for your DAO, or use an existing one
        </div>
        <div class="choose-box">
          <div class="choose-item" :class="{'active':activeIndex == 0}" @click="activeIndex=0">
            New Token
          </div>
          <div class="choose-item" :class="{'active':activeIndex == 1}" @click="activeIndex=1">
            Existing Token
          </div>
        </div>
      </div>
      <div class="type-box" v-show="activeIndex==0">
        <div class="big-input-box">
          <div class="input-box">
            <div class="name">
              Token Name
            </div>
            <input type="text" placeholder="Name">
    
          </div>
          <div class="input-box">
            <div class="name">
              Symbol
            </div>
            <input type="text" placeholder="Symbol">
    
          </div>
          <div class="input-box">
            <div class="name">
              Amount
            </div>
            <input type="text" placeholder="Amount">
    
          </div>
          <div class="input-box">
            <div class="name">
              Decimals
            </div>
            <input type="text" placeholder="Decimals">
          </div>
        </div>
        <div class="input-box">
          <div class="name">
            LOGO PATH
          </div>
          <input type="text" placeholder="URL" v-model="imgUrl">
          <div class="pre-img-box" v-show="imgUrl">
            <img class="pre-img" :src="imgUrl" alt="">
          </div>
        </div>
       
      </div>
      <div class="type-box" v-show="activeIndex==1">
      
      </div>
      <div class="input-box">
        <div class="name">
          Token Holders
        </div>
        <input type="text" placeholder="Address">
      </div>
      <div class="input-box">
        <div class="name">
          Mortgage Time Setting
        </div>
        <input type="text" placeholder="Address">
      </div>
      <div class="input-box">
        <div class="name">
          Generate NFT Name
        </div>
        <input type="text" placeholder="Name">
      </div>
      <div class="input-box">
        <div class="name">
          NFT Address
        </div>
        <input type="text" placeholder="Address">
      </div>
      <div class="input-box">
        <div class="name">
          Manage Address
        </div>
        <input type="text" placeholder="Address">
      </div>
      <button class="operate-btn" @click="complete()">
        Complete
      </button>
    </div>
    <div class="footer-box">
      <div class="footer">
        <div class="left">
          Copyright@2021 NBank
        </div>
        <div class="right">
          <div class="icon">
            <img src="../assets/img/telegram.png" alt="">
          </div>
          <div class="icon">
            <img src="../assets/img/github.png" alt="">
          </div>
          <div class="icon">
            <img src="../assets/img/medium.png" alt="">
          </div>
          <div class="icon">
            <img src="../assets/img/twitter.png" alt="">
          </div>
          <div class="icon">
            <img src="../assets/img/discord.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ConnectWallet from "../components/ConnectWallet";
  import {mapGetters} from "vuex";
    export default {
        name: "createNFT",
        components:{
            ConnectWallet
        },
        data(){
            return {
                imgUrl:"",
                activeIndex:0,
                nbank_name:undefined,
            }
        },
        methods:{
          jump(){
            this.$router.push({path:'/home'})
          },
          complete(){
            console.log(111)
            this.$store.dispatch("nbankFactory/creatBank", {manager:"0x341E7f37930aCa7D95dBF9c8B729951a3B3E0A2a",_bankName:"asd"})
          }
        },
        computed: {
          ...mapGetters([
              'isConnected',
              'account'
          ])
        }
    }
</script>

<style lang="scss" scoped>
.createNFT{
  background: url("../static/imgs/create_bg.png");
  background-size: 100% 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
 
  flex-direction: column;
  color: #fff;
  .content{
    flex-grow: 1;
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    .big-input-box{
      width: 660px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .input-box{
        input {
          width: 300px;
        }
      }
    }
    .input-box{
      position: relative;
      .name{
        font-size: 20px;
        line-height: 70px;
      }
      input{
        width: 640px;
        height: 50px;
        background: #32263F;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        padding: 0 20px;
 
        font-size: 16px;
        &::placeholder{
          color: #666;
        }
      }
      .info{
        color: #666;
        font-size: 16px;
      }
      .pre-img-box{
        position: absolute;
        margin: 30px;
        left: 700px;
        top: 30px;
        .pre-img{
          width: 60px;
          height: 60px;
        }
      }
     
      .choose-box{
        display: flex;
        width: 240px;
        height: 30px;
        background: #32263F;
        border-radius: 5px;
        margin-top: 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        .choose-item{
          line-height: 30px;
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
          width: 50%;
          &.active{
            background: #B4386A;
          }
        }
      }
    }
  }
  .header-box{
    position: relative;
    flex-shrink: 0;
    height: 240px;
    
    .header-img{
      position: absolute;
      height: 240px;
      width: 100%;
    }
    .header-content{
      width: 1000px;
      margin: 30px auto;
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
  
    }
    .header-title{
      font-size: 30px;
      position: relative;
      z-index:1;
      width: 1000px;
      margin: 80px auto 0;
    }
  }
  .footer-box{
    flex-shrink: 0;
    width:  100%;
    height: 80px;
    background: #32263F;
  
    .footer{
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      .left{
        color: #fff;
        font-size: 20px;
      }
      .right{
        display: flex;
        .icon{
          width: 30px;
          margin-left: 20px;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
