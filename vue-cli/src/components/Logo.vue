<template>
    <span :class="margin">
        <router-link to="/">
            <link href='https://fonts.googleapis.com/css?family=Shadows Into Light Two' rel='stylesheet'>
            <img alt="Vue logo" src="../assets/logo.svg" width="100">
            <h1 :style="'font-family: \'Shadows Into Light Two\';font-size: 22px; color:'  + color" :class="margin">
                Recipes Finder
            </h1>
        </router-link>
    </span>
</template>

<script>
  export default {
    name: "Logo",

    props: {
      color: {
        type: String,
        default: "#000"
      },

      margin: {
        type: String,
        default: ""
      },
    }
  }
</script>

<style scoped>
    a {
        text-decoration: none!important;
        color: #000000!important;
    }
</style>