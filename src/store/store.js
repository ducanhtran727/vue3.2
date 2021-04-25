import { createStore } from "vuex";
import axios from 'axios'
export const store = createStore({
  state : {
      count: 0,
      value:[],
      valuePage:[],
      editValue:'',
      editItem:'',
      loading:true,
  },
  getters: {
      getValue(state){
          return state.value.filter(item => item.id === 1)
      },
      getContent(state){
        return state.valuePage
      },
      getLoading(state){
        return state.loading
      }
  },
  mutations:{
    setData(state , payload){
        state.value = payload
    },
    setDataContent(state , payload){
      state.valuePage = payload
  },
    editData(state , value){
        state.editValue = value
    },
    editItem(state, value){
      state.editItem = value
    },
  },
  actions:{
    actionGetData : async ({commit}) => {
       const res =  await axios.get('https://jsonplaceholder.typicode.com/users') 
        commit("setData",res.data)
    },
    actionGetDataContent : async ({commit,state}) =>{
      const res =  await axios.get('https://jsonplaceholder.typicode.com/comments') 
      commit("setDataContent",res.data)
      state.loading = false
    }
  }
});
