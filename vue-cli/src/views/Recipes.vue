<template>
    <div>
        <h1 v-if="recipes.length > 0" class="mt-4">Found recipes</h1>
        <div v-if="Object.keys(recipes).length > 0" class="card-columns">
            <Recipe v-for="(item, index) in recipes" :key="item.idMeal"
                    :recipeProp="item" :index="index"></Recipe>
        </div>
        <div v-else class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">The plate is empty</h1>
                <img alt="Vue logo" src="../assets/plate.svg" width="100">
                <p class="lead">Maybe you misspelled an ingredient?</p>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import Recipe from '@/components/Recipe.vue';

  export default {
    name: "Recipes",

    components: {
      Recipe
    },

    data: function () {
      return {
        recipes: []
      };
    },

    created: function () {
      if(this.$route.params && this.$route.params.recipes && this.$route.params.recipes.meals)
        this.recipes = this.$route.params.recipes.meals;
    },
  }
</script>

<style scoped>
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        color: #495057!important;
    }
    a {
        color: #495057!important;
    }
</style>