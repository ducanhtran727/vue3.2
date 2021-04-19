import { createStore } from "vuex";
import axios from 'axios'
export const store = createStore({
  state : {
      count: 0,
      value:[],
      editValue:''
  },
  getters: {
      getValue(state){
          return state.value.filter(item => item.id === 1)
      }
  },
  mutations:{
    setData(state , payload){
        state.value = payload
    },
    editData(state , value){
        state.editValue = value
    }
  },
  actions:{
    actionGetData : async ({commit}) => {
       const res =  await axios.get('https://jsonplaceholder.typicode.com/users') 
        commit("setData",res.data)
    }
  }
});
