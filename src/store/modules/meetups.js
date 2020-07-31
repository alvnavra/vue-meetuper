import axios from 'axios'

export default {
    namespaced:true,    
    //In state we are keeping our data we are sharing with our components
    state:{
        items:[],
        item:{}
    },
    //Actions are like methods in a Vue Component. They should not mutate the state.
    //Very good spot to fetch data. Action call usually should resolve into data.
    actions:{
        fetchMeetups({state, commit})  {
            commit('setItems',{resource:'meetups',items:[]},{root:true})
            return axios.get('/api/v1/meetups')
            .then((res)=>{
              const meetups = res.data
              commit('setItems',{resource:'meetups',items:meetups},{root:true})
              return state.items
            })
      
        },
        fetchMeetupById({state, commit}, meetupId){
            commit('setItem', {resource:'meetups', item:{}},{root:true})
            return axios.get(`/api/v1/meetups/${meetupId}`)
            .then(res => {
              const meetup = res.data
              commit('setItem', {resource:'meetups', item:meetup},{root:true})
              return state.item
            })    
        },        
    }
}