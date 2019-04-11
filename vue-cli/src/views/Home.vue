<template>
  <div class="home">
    <Logo></Logo>
    <div v-for="(item, index) in ingredients" :key="index">
      #{{index}}:
      <input type="text" v-model="ingredients[index].value">
      <button @click="RemoveIngredient(index)">-</button>
    </div>

    <div>
      <button @click="AddNew()">Add new</button>
      <button @click="GetRecipes()">Get Recipes</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'

export default {
  name: 'home',

  data: function(){
    return {
      ingredients: [{}]
    };
  },

  mounted: function(){
    fetch('https://www.themealdb.com/api/json/v2/1/filter.php?i=chicken_breast,garlic,salt&api_key=8673533')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  },

  components: {
    Logo
  },

  methods: {
    AddNew() {
      this.ingredients.push({});
    },

    RemoveIngredient(aIndex){
      this.ingredients.splice(aIndex, 1);
    },

    GetRecipes() {

    }
  }
}
</script>
