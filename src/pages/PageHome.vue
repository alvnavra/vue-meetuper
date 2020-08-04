<template>
  <div>
    <AppHero />
    <div
      v-if="pageLoader_isDataLoaded"
      class="container"
    >
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">
            Featured Meetups in "Location"
          </h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">
            Create Meetups
          </button>
          <router-link
            class="button is-primary is-pulled-right m-r-sm"
            :to="{name:'PageMeetupFind'}"
          >
            All
          </router-link>
        </div>
        <div class="row columns is-multiline">
          <!-- MeetupItem -->
          <MeetupItem
            v-for="meetup in meetups" 
            :key="meetup._id"
            :meetup="meetup"
          />
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">
            Categories
          </h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- Category -->
            <CategoryItem
              v-for="category in categories" 
              :key="category._id"
              :category="category"
            />
          </div>
        </div>
      </section>
    </div>
    <div
      v-else
      clas="container"
    >
      <AppSpinner />
    </div>
  </div>
</template>

<script>
  import CategoryItem from '@/components/CategoryItem'
  import MeetupItem from '@/components/MeetupItem'
  import {mapActions, mapState} from 'vuex'
  import pageLoader from '../mixins/pageLoader'
  export default {
    components:{
      CategoryItem,
      MeetupItem
    },
    mixins:[pageLoader],
    computed:{
      ...mapState({
        meetups: state => state.meetups.items,
        categories: state => state.categories.items
      })
    },
    created(){
      //Encadenamos las llamadas a las promesas y, cuando se han ejecutado todas, se lleva a cabo el then o el catch común.
      Promise.all([this.fetchMeetups(), this.fetchCategories()])
        .then(()=>{
          this.pageLoader_resolveData()
        })
        .catch((err)=>
          {
            console.log(err)
            this.pageLoader_resolveData()
          })
      /* this.fetchMeetups().then(()=>{
          return this.fetchCategories()
      }).then(()=>{
        this.isDataLoaded = true
      }) */
    },
    methods:{
      ...mapActions('meetups',['fetchMeetups']),
      ...mapActions('categories',['fetchCategories'])
    }
  }
</script>

<style scoped>
</style>