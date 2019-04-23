const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: window.Home,
    },
    {
      path: '/about',
      name: 'about',
      component: window.About
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: window.Recipes
    }
  ]
});

var app = new Vue({
  el: '#app',
  router,
  data: function(){
    return {
      sidebarClass: "",
      overlayCLass: "",
    }
  },

  methods: {
    ToggleSidebar() {
      //1: Toggle using vue variable
      if(this.sidebarClass === "active")
        this.sidebarClass = "";
      else
        this.sidebarClass = "active";

      if(this.overlayCLass === "active")
        this.overlayCLass = "";
      else
        this.overlayCLass = "active";

      //1.1: Vue variable with if short form
      // this.sidebarClass = this.sidebarClass === "active" ? "" : "active";
      // this.overlayCLass = this.overlayCLass === "active" ? "" : "active";

      //3: Toggle using query selector
      // let el = document.querySelector('#sidebar');
      // el.classList.toggle('active');
      //
      // el = document.querySelector('#overlay');
      // el.classList.toggle('active');
    }
  }
});

// register service worker if the api is available
if ('serviceWorker' in navigator) {
  // wait for the page to load, then we register the sw
  window.addEventListener('load', () => {
    // only when the page is loaded we register the service worker
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}