<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import VerseWord from "./components/VerseWord.vue";

const words: Ref<any[]> = ref([])

onMounted(() => {
  fetch('https://api.quran.com/api/v4/verses/by_key/67:1?language=en&words=true')
  .then(res=>res.json())
  .then(json=>{
    console.log(json);
    words.value = json.verse.words
  })
})
</script>

<template>
  <header>
    <!-- {{  words.length }} -->
    <div style="direction: rtl;">
      <VerseWord v-for="word in words" :key="word.id" :word="word" />
    </div> 
    <!-- <ul>
      <li v-for="word in words" :key="word.id">
        <h1 class="arabic">{{ word.code_v1 }}</h1>
        {{ word.translation.text }}
      </li>
    </ul>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Al Mulk</RouterLink>
        <RouterLink to="/about">An Naba</RouterLink>
      </nav>
    </div> -->
  </header>
  <div>
    <RouterView />
  </div>

  
</template>

<style scoped>
.arabic{
  font-family: 'Mushaf Page 563';
}
header {
  display: block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
