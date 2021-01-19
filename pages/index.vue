<template>
  <div class="text-center">
    <div class="fs-2 page-header">Welcome to Short Jokes</div>
    <nuxt-link class="fs-6" to="/jokes">Lets have some laugh</nuxt-link>
    <b-card
      img-src="~/assets/images/jokes_from_web.png"
      img-alt="Card image"
      img-right
      img-width="50%"
      class="m-5"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        Browse jokes <strong>around the world</strong>
      </b-card-text>
    </b-card>

    <b-card
      img-src="~/assets/images/joke_answer.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-width="50%"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> Get joke's <strong>answer</strong> </b-card-text> </b-card
    ><b-card
      img-src="~/assets/images/filter_jokes.png"
      img-alt="Card image"
      img-right
      class="m-5"
      img-width="50%"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> <strong>Filter</strong> jokes </b-card-text>
    </b-card>

    <b-card
      img-src="~/assets/images/own_jokes.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-width="50%"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> Browse <strong>own jokes</strong> </b-card-text>
    </b-card>
    <b-card
      img-src="~/assets/images/add_own_joke.png"
      img-alt="Card image"
      img-right
      img-width="50%"
      class="m-5"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> <strong>Add</strong> own jokes</b-card-text>
    </b-card>

    <b-card
      img-src="~/assets/images/edit_own_joke.png"
      img-alt="Card image"
      img-left
      class="m-5"
      img-width="50%"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> <strong>Edit</strong> own jokes</b-card-text>
    </b-card>
    <b-card
      img-src="~/assets/images/delete_own_joke.png"
      img-alt="Card image"
      img-right
      class="m-5"
      img-width="50%"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text> <strong>Delete</strong> own jokes</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Welcome - Short Jokes',
    }
  },
}
</script>
