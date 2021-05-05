<template>
  <div>
    <h2>Add a new song</h2>

    <form @submit.prevent="addSong">
      <input v-model="newSong" />
      <button type="submit">Add song</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewSong',
  data() {
    return {
      newSong: ''
    }
  },
  methods: {
    addSong() {
      this.$emit('purpleMonkeyDishwasher', this.newSong);
      this.newSong = '';
    }
  }
}
</script>

<style>
  
</style>
