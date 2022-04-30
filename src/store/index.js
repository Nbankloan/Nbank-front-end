import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import erc20Factory from "./modules/abisMethods/erc20Factory";
import loanMarket from "./modules/abisMethods/loanMarket";
import NBank from "./modules/abisMethods/NBank";
import nbankFactory from "./modules/abisMethods/nbankFactory";
import NBT from "./modules/abisMethods/NBT";
import NDeposit721 from "./modules/abisMethods/NDeposit721";

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    erc20Factory,
    loanMarket,
    NBank,
    nbankFactory,
    NBT,
    NDeposit721

  }
})
