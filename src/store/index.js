import Vue from 'vue'
import Vuex from 'vuex'

import workModule from './workModule.js'
// workList

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    workModule
  }
})