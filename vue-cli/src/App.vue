<template>
  <div class="wrapper" id="app" v-cloak>
    <!-- Sidebar -->
    <nav id="sidebar" :class="sidebarClass">
      <div class="sidebar-header">
        <Logo color="#fff" margin="ml-1"></Logo>
      </div>

      <ul class="list-unstyled components">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <div class="container p-0">
      <nav class="navbar navbar-dark bg-success2">
        <div class="w-100 float-left text-left">
            <img alt="Menu Switch Icon" class="menu-button"
                 src="./assets/menu.svg" width="40" @click="ToggleSidebar()" id="sidebarCollapse">
            <span style="font-family: 'Shadows Into Light Two';font-size: 30px; color:#fff" class="align-middle">
              Recipes Finder
            </span>
        </div>
      </nav>
      <div>
        <router-view/>
      </div>
      <div :class="'overlay '+ overlayCLass" id="overlay" @click="ToggleSidebar()"></div>
    </div>
  </div>

</template>

<script>
  import Logo from '@/components/Logo.vue';

  export default {
    name: "App",

    data: function(){
      return {
        sidebarClass: "",
        overlayCLass: "",
      }
    },

    components: {
      Logo
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
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a, a:hover, a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-success {
  color: #fff;
  background-color: #42b883!important;
  border-color: #42b883!important;
}

.bg-success2 {
  background-color: #42b883!important;
}

.container {
   max-width: 4069px!important;
}

#nav {
  padding: 30px;
}

a {
  color: #fff!important;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
.wrapper {
  display: flex;
  align-items: stretch;
}

.menu-button {
  cursor: pointer;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  background: #42b883;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

.overlay {
  display: none;
  position: fixed;
  /* full screen */
  width: 100vw;
  height: 100vh;
  /* transparent black */
  background: rgba(0, 0, 0, 0.7);
  /* middle layer, i.e. appears below the sidebar */
  z-index: 998;
  opacity: 0;
  /* animate the transition */
  transition: all 0.5s ease-in-out;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #42b883;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #42b883;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #42b883!important;
  background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
  color: #000!important;
  background: #e9ecef;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #42b883;
}

/*Mobile CSS*/
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* top layer */
    z-index: 9999;
  }

  #sidebar.active {
    margin-left: 0;
  }

  .overlay.active {
    display: block;
    opacity: 1;
  }
}

</style>