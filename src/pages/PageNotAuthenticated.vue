<template>
  <div class="container">
    <ErrorView
      :title="'Ooooops, you are not authenticated to visit this page. Please Login'" 
      :status="'401'" 
      :navigate-to-page="'PageLogin'" 
      :navigate-to-text="'Navigate to Login Page'" 
    />
  </div>
</template>

<script>
  import ErrorView from '@/components/ErrorView'
  export default {
      components:{
          ErrorView
      }
  }
</script>

<style scoped>
</style>