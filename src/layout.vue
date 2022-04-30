<template>
  <div :class="classObj" class="layout">
    <leftNav></leftNav>
    <div class="right-content">
      <cherrySafeHeader/>
      <router-view id="main" class="layout-content"/>
    </div>
  </div>
</template>

<script>

import cherrySafeHeader from "@/components/cherrySafeHeader"
import leftNav from "./components/leftNav";
export default {
  name: "layout",
  components: {
      leftNav,
    cherrySafeHeader,

  },
  data() {
    return {
      showPrice: true,
      dialogVisible: false,
      isCollapse: true,
    }
  },
  watch: {
    isShowConnect() {
      this.dialogVisible = this.$store.state.app.isShowConnect
    }
  },
  computed: {
    isShowConnect() {
      return this.$store.state.app.isShowConnect
    },
    classObj() {
      return {
      }
    }
  },
  created() {
    if (this.$route.path == '/cityNodeToken' || this.$route.path == '/home') {
      this.showPrice = false
    } else {
      this.showPrice = true
    }
  },
  methods: {
    onClose() {
      this.$store.commit("app/SET_SHOWCONNECT")
    },
    async registerWeb3() {

    },
    async getWallet() {
      if (typeof window.ethereum == 'undefined') {
        this.$message.error("down metamask")
      }
      window.ethereum.request({method: 'eth_requestAccounts'});

      this.registerWeb3()

    },
  }
}
</script>

<style lang="scss">

.layout {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  .right-content{
    margin: 0;
    padding: 0 20px;
    width: 100%;
  }
  #main {
    position: relative;
    flex: 1;
    z-index: 1;
    .no-data{
      text-align: center;
      padding: 10px 0;
    }
    .el-dialog__body{
      text-align: center;
      padding: 30px;
      line-height: 50px;
      .input-box{
        display: flex;
        flex-shrink: 0;
        .name{
          width: 80px;
        }
      }
    }
  }
}


</style>
