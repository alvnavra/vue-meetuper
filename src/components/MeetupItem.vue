<template>
    <div class="column is-one-third">
        <!-- <router-link :to="'/meetups/'+meetup._id" class="card large"> -->
        <div class="card large">
            <router-link :to="{name:'PageMeetupDetail', params:{id:meetup._id}}" class="card-meetup-link">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="meetup.image"/>
                        <!-- <img src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=" alt="Image"> -->
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level m-b-md">
                    <div class="media-left">
                        <div class="level-item has-text-centered">
                        <div>
                            <p class="title">{{meetup.startDate  | formatDate('MMMM')}}</p>
                            <p class="title">{{meetup.startDate | formatDate('D')}}</p>
                        </div>
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 no-padding is-marginless">{{meetup.title}}</p>
                        <!-- <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p> -->
                        <span class="tag is-success">{{meetup.category.name}}</span>
                        <p class="subtitle is-7"><!-- Tomorrow · Times Square · 05201 --> {{meetup.location}} </p>
                    </div>
                    </div>
                    <div class="content">
                    {{meetup.description}}
                        <!-- The Beast stumbled in the dark for it could no longer see the path... -->
                        <div class="background-icon"><span class="icon-twitter"></span></div>
                    </div>
                </div>
            </router-link>
        </div>
  </div>
</template>
<script>
export default {
    props:{
        meetup:{
            required:true,
            type:Object
        }
    }
}
</script>
<style scoped>
    .card-meetup-link {
        color:black
    }
</style>