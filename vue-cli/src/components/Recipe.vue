<template>
    <div class="card m-2">
        <img class="card-img-top" :src="recipe.strMealThumb" :alt="recipe.strMeal">
        <div class="card-body">
            <div>
                <strong>{{recipe.strMeal}}</strong>
            </div>
            <button class="btn btn-link" data-toggle="collapse" :data-target="'#recipe-' + recipe.idMeal" role="button"
                    @click="GetRecipeDetails(index)"
                    aria-expanded="false" :aria-controls="'recipe-' + recipe.idMeal">
                View recipe
            </button>
            <div class="collapse mt-3" :id="'recipe-' + recipe.idMeal">
                <img v-if="!recipe.instructions" alt="Loading" src="../assets/loading.svg" class="image-overlay mt-4 mb-5" width="50">
                <ul v-else class="nav nav-tabs">
                    <li class="nav-recipe">
                        <a :class="'nav-link ' + (recipe.tab === 'ingredients' || !recipe.tab ? 'active' : '')" href="#" @click.prevent="SwitchTab(index, 'ingredients')">
                            Ingredients
                        </a>
                    </li>
                    <li class="nav-recipe">
                        <a :class="'nav-link ' + (recipe.tab === 'instructions' ? 'active' : '')" href="#" @click.prevent="SwitchTab(index, 'instructions')">
                            Instructions
                        </a>
                    </li>
                </ul>
                <div v-if="recipe.tab === 'instructions'" class="text-left mt-3">
                    {{recipe.instructions}}
                </div>
                <div v-if="recipe.tab === 'ingredients'" class="text-left mt-3">
                    <ul>
                        <li v-for="(ingredientItem, ingredientIndex) in recipe.ingredients">
                            {{ingredientItem}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Recipe",
    props: ["recipeProp", "index"],

    data: function(){
      console.log(this.recipeProp);
      return {
        recipe: this.recipeProp,
      }
    },

    methods: {
      GetRecipeDetails(aIndex) {
        let $this = this;
        this.recipe.loading = true;

        if(this.recipe.instructions)
          return;

        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recipe.idMeal + '&api_key=8673533')
          .then(
            function (response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
              }

              response.json().then(function (data) {
                console.log(data);
                $this.recipe.tab = "ingredients";
                $this.recipe.instructions = data.meals[0].strInstructions;
                $this.recipe.ingredients = [];

                Object.keys(data.meals[0]).forEach(function(aItem){
                  if(aItem.indexOf("strIngredient") >= 0 && data.meals[0][aItem].length > 0)
                  {
                    let measure = aItem.replace("strIngredient", "strMeasure1");
                    if(data.meals[0][measure])
                      $this.recipe.ingredients.push(data.meals[0][aItem] + " " + data.meals[0][measure]);
                    else
                      $this.recipe.ingredients.push(data.meals[0][aItem]);
                  }
                });

                $this.$forceUpdate();
              });

              $this.recipe.loading = false;
            }
          )
          .catch(function (err) {
            console.log('Fetch Error :-S', err);
            $this.recipe.loading = false;
          });
      },

      SwitchTab(aIndex, aTabName) {
        this.recipe.tab = aTabName;
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
    .card-columns {
        column-count: 5;
    }

    @media screen and (max-width: 568px) {
        .card-columns {
            column-count: 1;
        }
    }
</style>