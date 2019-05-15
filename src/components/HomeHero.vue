<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black.font-italic white--text text-xs-center">JEEC</div>
            <div class="display-3 font-weight-black.font-italic white--text text-xs-center mb-3">2019</div>
            <div class="display-1 font-weight-bold.font-italic white--text text-xs-center">ENGINEERING & TECH TALKS</div>
            <v-btn fab class="mt-5 white darken-4">
            <v-icon large color="black">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>