<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <img class="homepage-img" src="../static/images/portrait.jpg" alt="Profile Image" />
      <h1 class="title">hello and welcome to my website! &#128075;</h1>
      <p>
        This site is currently under construction and will be released in early 2021.
        Thank you for your patience!
      </p>
      <p>Stay connected for all the latest updates: </p>
      <div class="links">
        <a
          href="https://www.instagram.com/mahamzayed/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/mahamzayed/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
         LinkedIn 
        </a>
        <a
          href="https://twitter.com/mahamzayed"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Twitter
        </a>
        <a
          href="https://github.com/mahamzayed"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
         Github
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

p {
  margin-bottom: 10px;
}

.homepage-img {
  object-fit: cover;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
