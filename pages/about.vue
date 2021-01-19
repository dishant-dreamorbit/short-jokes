<template>
  <div class="text-center">
    <div class="fs-2 page-header">About</div>
    <p class="fs-6">
      This application was built using Nuxt.js, Vue.js, BootstrapVue, Bootstrap,
      CSS, HTML and Jest.
    </p>
    <b-card
      img-src="~/assets/images/nuxt.jpg"
      img-alt="Card image"
      img-right
      img-height="200px"
      class="m-5"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Nuxt.js</strong> is a free and open source web application
        framework based on Vue.js, Node.js, Webpack and Babel.js. The framework
        is advertised as a "meta-framework for universal applications".
      </b-card-text>
    </b-card>

    <b-card
      img-src="~/assets/images/vue.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-height="200px"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Vue.js</strong> is an open-source model–view–viewmodel front end
        JavaScript framework for building user interfaces and single-page
        applications. It was created by Evan You, and is maintained by him and
        the rest of the active core team members.</b-card-text
      > </b-card
    ><b-card
      img-src="~/assets/images/bootstrap_vue.png"
      img-alt="Card image"
      img-right
      class="m-5"
      img-height="200px"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        With <strong>BootstrapVue</strong> you can build responsive,
        mobile-first, and ARIA accessible projects on the web using Vue.js and
        the world's most popular front-end CSS library.</b-card-text
      >
    </b-card>

    <b-card
      img-src="~/assets/images/bootstrap.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-height="200px"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Bootstrap</strong> is a free and open-source CSS framework
        directed at responsive, mobile-first front-end web development. It
        contains CSS- and JavaScript-based design templates for typography,
        forms, buttons, navigation, and other interface components.</b-card-text
      >
    </b-card>
    <b-card
      img-src="~/assets/images/css.png"
      img-alt="Card image"
      img-right
      img-height="200px"
      class="m-5"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Cascading Style Sheets</strong> is a style sheet language used
        for describing the presentation of a document written in a markup
        language such as HTML. CSS is a cornerstone technology of the World Wide
        Web, alongside HTML and JavaScript.</b-card-text
      >
    </b-card>

    <b-card
      img-src="~/assets/images/html.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-height="200px"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Hypertext Markup Language</strong> is the standard markup
        language for documents designed to be displayed in a web browser. It can
        be assisted by technologies such as Cascading Style Sheets and scripting
        languages such as JavaScript.</b-card-text
      >
    </b-card>
    <b-card
      img-src="~/assets/images/jest.jpg"
      img-alt="Card image"
      img-right
      class="m-5"
      img-height="200px"
      body-bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        <strong>Jest</strong> is a JavaScript testing framework maintained by
        Facebook, Inc. designed and built by Christoph Nakazawa with a focus on
        simplicity and support for large web applications. It works with
        projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and
        Svelte.</b-card-text
      >
    </b-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About - Short Jokes',
    }
  },
}
</script>
