window.Logo = {
  props: {
    color: {
      type: String,
      default: "#000"
    },

    margin: {
      type: String,
      default: ""
    },
  },

  template: `
    <span :class="margin">
          <router-link to="/">
              <link href='https://fonts.googleapis.com/css?family=Shadows Into Light Two' rel='stylesheet'>
              <img alt="Vue logo" src="./assets/logo.svg" width="100">
              <h1 :style="'font-family: \\'Shadows Into Light Two\\';font-size: 22px; color:'  + color" :class="margin">
                  Recipes Finder
              </h1>
          </router-link>
      </span>
  `
};

Vue.component('Logo', window.Logo);
