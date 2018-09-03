<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg
    }
  },
  methods: {
    onClick () {
      this.$store.commit('changeMsg', 'click')
    }
  }
}
</script>

