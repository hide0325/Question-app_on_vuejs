<template>
  <v-app>
    <v-content>
      <progressBar/>
      <Questions/>
    </v-content>
  </v-app>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import Questions from '@/components/Questions'

export default {
  name: 'App',
  components: {
    Questions,
    ProgressBar
  }
};
</script>

<style>
* {
  letter-spacing: .1rem;
  font-size: 14px;
  text-decoration: none;
  word-break: break-all;
}
</style>
