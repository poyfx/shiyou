import Vue from 'vue'
import Vuex from 'vuex'
import  user from './module/user'
Vue.use(Vuex)

const store = new Vuex ({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules:{
        user
    }
})
export default store