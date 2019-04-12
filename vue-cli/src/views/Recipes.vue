<template>
    <div>
        <Logo></Logo>
        <div class="card-columns">
            <Recipe v-for="(item, index) in recipes" :key="item.idMeal" :recipeProp="item" :index="index"></Recipe>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import Logo from '@/components/Logo.vue';
  import Recipe from '@/components/Recipe.vue';

  export default {
    name: "Recipes",

    components: {
      Logo,
      Recipe
    },

    data: function () {
      return {
        recipes: []
      };
    },

    created: function () {
      if(this.$route.params && this.$route.params.recipes)
        this.recipes = this.$route.params.recipes.meals;
    },
  }
</script>

<style>
    .card-columns {
        column-count: 5;
    }

    @media screen and (max-width: 568px) {
        .card-columns {
            column-count: 1;
        }
    }

</style>