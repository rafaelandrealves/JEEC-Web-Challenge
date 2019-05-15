<template>
    <nav>
        <v-toolbar app color="grey lighten-5" grey >
            <v-toolbar-side-icon class = "grey lighten-5" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-container  class="home">
                <v-layout justify-center align-center column pa-5>
                </v-layout>
            </v-container>
            <v-spacer></v-spacer> 
     
            <v-toolbar-title>{{JEEC}}</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class = "grey lighten-5">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="grey lighten-5">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey lighten-5">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>    
    </nav>      
</template>

<script>
export default {
    name: 'AppNavigation',
    data(){
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Main', route: '/' },
                { icon: 'person', text: 'Speakers', route: '/Speakers' },
            ]
        }
    }

};
</script>

<style scoped>
.home {
    background: url('https://www.jeec.ist/static/jeec_logo_small.svg');
    background-size: auto;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
}
</style>

