<template>
  <div>
    <h2 class="mb-4"><v-icon class="primary--text">mdi-alert-circle</v-icon>この内容で送信してよろしいですか？</h2>
    <v-card class="mb-8">
      <v-card-title class="pa-2">・あなたの{{ q1.question_title }}</v-card-title>
      <v-card-text class="pa-2">{{ userName }}</v-card-text>
      <v-divider/>
      <v-card-title class="pa-2">・あなたの{{ q2.question_title }}</v-card-title>
      <v-card-text class="pa-2">{{ parseGender }}</v-card-text>
      <v-divider/>
      <v-card-title class="pa-2">・あなたの{{ q3.question_title }}</v-card-title>
      <v-card-text class="pa-2">{{ userBirth }}</v-card-text>
      <v-divider/>
      <v-card-title class="pa-2">・あなたの好きな{{ q4.question_title }}</v-card-title>
      <div class="selectedLikeAnimals">
        <v-card-text
          v-for="animal in selectedLikeAnimals"
          :key="animal"
          class="pa-0 animal"
        >
          <v-card-text class="pa-2">{{ animal }}</v-card-text>
        </v-card-text>
      </div>
      <v-divider/>
      <v-card-title class="pa-2">・アンケートのご感想</v-card-title>
      <v-card-text class="pa-2">{{ impressions }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q1: {
      type: Object
    },
    q2: {
      type: Object
    },
    q3: {
      type: Object
    },
    q4: {
      type: Object
    },
    q5: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'userName',
      'userGender',
      'userBirth',
      'selectedLikeAnimals',
      'impressions',
    ]),
    parseGender() {
      return this.userGender === 1 ? '女性' : '男性'
    }
  }
}
</script>

<style scoped>
.v-card__title {
  font-size: 14px;
}
.selectedLikeAnimals {
  display: flex;
  flex-wrap: wrap;
}
.animal {
  flex-basis: 25%;
}
</style>