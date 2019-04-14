function ToggleSidebar() {
  let el = document.querySelector('#sidebar');
  el.classList.toggle('active');

  el = document.querySelector('#overlay');
  el.classList.toggle('active');
}

function GetIngredients()
{
  let ingredients = [];
  document.querySelectorAll("#ingredient").forEach(function(aItem){
    if(aItem.value && aItem.value.length > 0)
      ingredients.push(aItem.value);
  });
  return ingredients;
}

function GetRecipes(event){
  let ingredients = GetIngredients();
  document.querySelector('#get-recipes').disabled = ingredients.length === 0;

  if(event && event.keyCode !== 13)
  {
    return;
  }

  let el = document.querySelector('#loading-overlay');
  el.classList.toggle("d-none");

  fetch('https://www.themealdb.com/api/json/v2/1/filter.php?i=' + ingredients.join(",") + '&api_key=8673533')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function (data) {
          console.log(data);
          ShowRecipes(data);
          let el = document.querySelector('#loading-overlay');
          el.classList.toggle("d-none");
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function AddNew()
{
  let ingredients = GetIngredients();
  if(ingredients.length === 0)
    return;

  let itm = document.getElementById("row-element");
  let cln = itm.cloneNode(true);
  for(let firstItem in cln.children)
  {
    if(cln.children[firstItem].id && cln.children[firstItem].id.indexOf("row-content") >= 0)
    {
      for(let secondItem in cln.children[firstItem].children)
      {
        if(cln.children[firstItem].children[secondItem].id && cln.children[firstItem].children[secondItem].id.indexOf("ingredient") >= 0)
          cln.children[firstItem].children[secondItem].value = "";
      }
    }
  }

  document.getElementById("list").appendChild(cln);
}

function RemoveIngredient(event)
{
  let ingredients = GetIngredients();
  if(ingredients.length === 0)
    return;

  event.path.forEach(function(aItem){
    if(aItem.id && aItem.id.indexOf("row-element") >= 0)
      aItem.remove();
  });
}

function ShowRecipes(aResponse)
{
  document.querySelector("#recipes").classList.remove("d-none");
  document.querySelector("#home").classList.add("d-none");
  if(!aResponse.meals || aResponse.meals.length === 0)
  {
    document.querySelector("#no-recipes").classList.remove("d-none");
  }
  else
  {
    let content = "";
    aResponse.meals.forEach(function(aRecipe){
      let recipe = GetRecipe(aRecipe);
      content += recipe;
    });

    document.querySelector("#recipes-columns").innerHTML = content;
    document.querySelector("#recipes-title").classList.remove("d-none");
  }
}


function GetRecipe(recipe)
{
  return `
  <div class="card m-2">
        <img class="card-img-top" src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <div class="card-body">
            <div>
                <strong>${recipe.strMeal}</strong>
            </div>
            <button class="btn btn-link" data-toggle="collapse" data-target="#recipe-${recipe.idMeal}" role="button"
                    onclick="GetRecipeDetails(${recipe.idMeal})"
                    aria-expanded="false" aria-controls="recipe-${recipe.idMeal}">
                View recipe
            </button>
            <div class="collapse mt-3" id="recipe-${recipe.idMeal}">
                <ul v-else class="nav nav-tabs">
                    <li class="nav-recipe">
                        <a class="nav-link active" id="ingredients-link-${recipe.idMeal}" href="#" onclick="SwitchTab('ingredients', ${recipe.idMeal})">
                            <img alt="Ingredients" src="./assets/book.svg" width="30">
                        </a>
                    </li>
                    <li class="nav-recipe">
                        <a class="nav-link" id="instructions-link-${recipe.idMeal}" href="#" onclick="SwitchTab('instructions', ${recipe.idMeal})">
                           <img alt="Ingredients" src="./assets/harvest.svg" width="30">
                        </a>
                    </li>
                </ul>
                <div class="text-left mt-3" id="instructions-${recipe.idMeal}">
                </div>
                <div class="text-left mt-3 d-none" id="ingredients-${recipe.idMeal}">
                </div>
            </div>
        </div>
    </div>
  `;
}

function GetRecipeDetails(aID)
{
  let toReturn = [];
  fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + aID + '&api_key=8673533')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function (data) {
          console.log(data);
          toReturn.instructions = data.meals[0].strInstructions;
          toReturn.ingredients = [];

          Object.keys(data.meals[0]).forEach(function(aItem){
            if(aItem.indexOf("strIngredient") >= 0 && data.meals[0][aItem].length > 0)
            {
              let measure = aItem.replace("strIngredient", "strMeasure1");
              if(data.meals[0][measure])
                toReturn.ingredients.push(data.meals[0][aItem] + " " + data.meals[0][measure]);
              else
                toReturn.ingredients.push(data.meals[0][aItem]);
            }
          });

          toReturn.ingredients = "<ul><li>" + toReturn.ingredients.join("</li><li>") + "</li></ul>";
          document.querySelector("#ingredients-" + aID).innerHTML = toReturn.ingredients;
          document.querySelector("#instructions-" + aID).innerHTML = toReturn.instructions;
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function SwitchTab(aTab, aID)
{
  if(aTab === "ingredients")
  {
    document.querySelector("#ingredients-" + aID).classList.add("d-none");
    document.querySelector("#instructions-" + aID).classList.remove("d-none");
  }
  else
  {
    document.querySelector("#ingredients-" + aID).classList.remove("d-none");
    document.querySelector("#instructions-" + aID).classList.add("d-none");
  }

  document.querySelector("#ingredients-link-" + aID).classList.toggle("active");
  document.querySelector("#instructions-link-" + aID).classList.toggle("active");
}

function ShowAbout()
{
  fetch('README.md').then(response => {
    return response.text();
  }).then(data => {
    // Work with JSON data here
    let converter = new showdown.Converter();
    let html = converter.makeHtml(data);

    document.querySelector("#recipes").classList.add("d-none");
    document.querySelector("#home").classList.add("d-none");
    document.querySelector("#about").classList.remove("d-none");
    document.querySelector("#readme-content").innerHTML = html;
  }).catch(err => {
    // Do something for an error here
  });
}