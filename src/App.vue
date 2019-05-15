<template>
  <v-app> 
    <AppNavigation />
    <v-content class = "mx-4 mb-4">
     <router-view></router-view>
    </v-content>
  </v-app>  

</template>

<script>

import AppNavigation from "@/components/AppNavigation";



export default {
  name : 'App',
  components: { AppNavigation },
};

</script>

