<template>
  <div id="app">
    <h2>Grateful Dead</h2>
    <NewSong @purpleMonkeyDishwasher="addSong" />
    <GratefulDeadSongs :songs="songs">
      <h3>This is a child</h3>
    </GratefulDeadSongs>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GratefulDeadSongs from './components/GratefulDeadSongs.vue'
import NewSong from './components/NewSong.vue'

export default {
  name: 'App',
  components: {
    GratefulDeadSongs,
    NewSong
  },
  data() {
    return {
      songs: [],
    };
  },
  methods: {
    addSong(songTitle) {
      console.log('got a message from the child component', songTitle);
      this.songs.push(songTitle)
    }
  },
  created() {
    console.log('component created');
  },
  mounted() {
    console.log('component mounted');
  },
  updated() {
    console.log('component updated');
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
