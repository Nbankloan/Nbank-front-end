<template>
  <div class="rain-header" >
    <div class="cherrySafe-box" :style="dialogVisible ? 'z-index: 1000' :'z-index:10'">
      <div class="left">
        <strong>{{$route.path.substr(1,$route.path.length)}}</strong>
      </div>
   
      <div class="rain-header-right">
        <ConnectWallet class="connect-wallet"></ConnectWallet>
      </div>
    </div>
    <div class="item-nav-header">

    </div>
  </div>
</template>

<script>
import ConnectWallet from "@/components/ConnectWallet";
import {mapGetters} from "vuex";

export default {
  name: "nBankHeader",
  components: {
    ConnectWallet,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    setActiveIndex(index){
      this.$store.commit("multiSign/SET_ActiveIndex",index)
    },
    toggleSideBar(){
      this.$store.dispatch("app/toggleSideBar",!this.sidebar)
    },
  },

  created() {

  },
  watch: {

  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    activeIndex(){
      return this.$store.state.multiSign.activeIndex
    },

    account() {
      return this.$store.state.app.account
    },
    multiAddress(){
      return this.$store.state.multiSign.mulAddress
    },
    sidebar() {
      return this.$store.state.app.isCollapse
    },
 
  }
}
</script>

<style lang="scss" scoped>

.rain-header {
  width: 100%;
  position: relative;
  z-index: 1000;
  .item-nav-header {
    width: 100%;
  }

  .cherrySafe-box {
    overflow: hidden;
    height: 60px;
    display: flex;
    padding-right: 2%;
    align-items: center;
    z-index: 10;
    justify-content: space-between;
    background-size: cover;
    position: relative;
    .left {
     strong{
       font-size: 28px;
     }
    }
  }
  .nav-list {
    width: 430px;
    margin-left: 100px;
    display: flex;
    justify-content: space-around;
    padding: 20px 30px;
    border-top: 1px solid rgba(253, 109, 174, 0.6);

    .item {
      cursor: pointer;
      padding: 16px 0;
      font-size: 16px;
      display: flex;
      align-items: center;

      .name {
        margin-left: 10px;
      }

      &.active {
        color: #FF1F84;
      }
    }
  }
  .connect-wallet {
    ::v-deep .el-button {
      span {
        font-size: 10px;
        padding: 8px 0;
      }
    }
  }

}

</style>
