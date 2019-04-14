window.About = {
  data: function(){
    return {
      html: ""
    }
  },

  created() {
    let $this = this;
    fetch('README.md').then(response => {
      return response.text();
    }).then(data => {
      // Work with JSON data here
      let converter = new showdown.Converter();
      $this.html = converter.makeHtml(data);
    }).catch(err => {
      // Do something for an error here
    });
  },

  template: `
  <div class="about">
    <h1>
      Modern Web Programming info bla bla bla ...
    </h1>
    <div v-html="html"></div>
  </div>
  `
};

Vue.component('About', window.About);
