window.Home = {
  name: 'home',

  data: function () {
    return {
      ingredients: [{}],
      loading: false
    };
  },

  mounted: function () {
  },

  components: {
    Logo
  },

  methods: {
    AddNew() {
      this.ingredients.push({});
    },

    RemoveIngredient(aIndex) {
      this.ingredients.splice(aIndex, 1);
    },

    GetRecipes() {
      //Store current object in a local variable, since inside FETCH callback "this" is something else
      let $this = this;
      //Display loading overlay
      $this.loading = true;

      //Get ingredients:
      let ingredients = this.ingredients.map(a => a.value);
      fetch('https://www.themealdb.com/api/json/v2/1/filter.php?i=' + ingredients.join(",") + '&api_key=8673533')
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + response.status);
              return;
            }

            response.json().then(function (data) {
              console.log(data);
              $this.loading = false;
              $this.$router.push({ name: 'recipes', params: { recipes: data } });
            });
          }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    },

    DisableGet() {
      let toReturn = true;

      this.ingredients.forEach((aIngredient) => {
        if(aIngredient.value)
          toReturn = false;
      });

      return toReturn;
    }
  },

  template: `
    <div class="home">
        <div class="small-overlay w-100 h-100" v-if="loading">
            <img alt="Loading" src="./assets/loading.svg" class="image-overlay">
        </div>
        <h1 class="mt-4">Hungry?</h1>
        <div class="container mt-5">
            <div v-for="(item, index) in ingredients" :key="index" class="row">
                <div class="col-sm w-25"></div>
                <div class="input-group mb-3 w-50 text-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            {{index+1}}:
                        </span>
                    </div>
                    <input v-model="ingredients[index].value"
                           type="text"
                           class="form-control"
                           placeholder="Ingredient"
                           @keyup.enter="GetRecipes()">
                    <div class="input-group-append">
                        <button @click="RemoveIngredient(index)"
                                :class="'btn ' + (ingredients.length === 1 ? 'btn-outline-dark' : 'btn-outline-danger') "
                                :disabled="ingredients.length === 1" :title="ingredients.length === 1 ? 'Hmm, 0 ingredients recipe?' : 'Remove ingredient' ">
                            <img alt="Add new ingredient" src="./assets/minus.svg" width="16">
                        </button>
                    </div>
                </div>
                <div class="col-sm  w-25"></div>
            </div>
        </div>

        <div style="text-align: center">
            <button class="btn btn-outline-success" @click="AddNew()">
                <img alt="Add new ingredient" src="./assets/plus.svg" width="16">
            </button>
            <br><br>
            <button class="btn btn-success" @click="GetRecipes()" :disabled="DisableGet()">
                Get Recipes
            </button>
        </div>

    </div>
  `
};

Vue.component('Home', window.Home);
