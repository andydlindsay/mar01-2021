<template>
  <div>
    <slot></slot>
    <h2>Song List</h2>

    <ul v-if="songs.length">
      <h4>Does this show up?</h4>
      <li v-for="(gratefulDeadSong, index) of songs" :key="index">
        {{ gratefulDeadSong }} ({{ index }})
      </li>
    </ul>

    <h2 v-else-if="false"></h2>

    <h2 v-else>Nothing to show</h2>

    

  </div>
</template>

<script>
export default {
  name: 'GratefulDeadSongs',
  props: [
    'songs'
  ]
}
</script>

<style>
  
</style>
