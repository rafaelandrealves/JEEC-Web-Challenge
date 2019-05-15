<template>
  <div class="Speakers">
    <v-container fluid fill-height>
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black.font-italic black--text text-xs-center">Speakers @JEEC</div>
        </v-layout>
    </v-container>
    <v-container fluid fill-height>
        <v-layout justify-center align-center class = "line" >
            <div class="display-1 font-weight-black.font-italic black--text text-xs-center">List of Guest Speakers That will steal the show</div>
        </v-layout>
    </v-container>
    <v-container class="my-5">
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Speaker</div>
            <v-avatar size= 150>
              <img :src="getImgUrl(project.avatar)":alt="project.person">
            </v-avatar>  
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">From</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">About</div>
            <div>{{ project.due }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Moe Szyslak', person: 'The Bartender', due: 'Bartender for Homer', status: 'ongoing',avatar: 'moe.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Sideshow Bob', person: 'The Clown', due: 'Clown', status: 'complete',avatar: 'sideshow_bob.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}, 
        { title: 'Patty Bouvier', person: 'Patty Bouvier', due: 'Sister', status: 'complete',avatar: 'patty.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Duffman', person: 'Duffman', due: 'Beer Guy', status: 'ongoing',avatar: 'duffman.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Ned Flanders', person: 'Ned Flanders', due: 'Sister', status: 'complete',avatar: 'ned_flanders.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Apu', person: 'Apu', due: 'Apu', status: 'complete',avatar: 'apu.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Itchy', person: 'Itchy', due: 'Cartoon', status: 'complete',avatar: 'itchy.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Scratchy', person: 'Scratchy', due: 'Cartoon', status: 'complete',avatar: 'scratchy.png', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      
      ]
    }
  },
   methods: {
    getImgUrl(pic){
      return require('./static/' + pic)
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}

.line{
  border-bottom: 4px  solid #3CD1C2; 

}

.Moe_Szyslak {
    background: url('./static/moe.png');
    padding: 50px;
    background-repeat: no-repeat;
    background-size: contain;

}
</style>