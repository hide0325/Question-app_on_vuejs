<template>
  <div class="pager mb-6">
    <v-btn
      v-if="sentNextBtn"
      @click="nextQuestion"
      :disabled="!accessorValid"
      :class="sentTextStyle"
      class="mb-4"
    >{{ nextText }}</v-btn>

    <v-btn
      v-if="count !== 1 && count !== $router.options.routes.length-1"
      @click="prevQuestion"
    >{{ prevText }}</v-btn>

    <router-link
      v-if="count === $router.options.routes.length-1"
      @click.native="resetAnswers"
      :to="{ name: 'q1' }"
      class="text-center"
    >
      <v-btn>最初に戻る</v-btn>
    </router-link> 
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['accessorValid'],
  data() {
    return {
      count: 1,
      range: 0,
      prevText: '戻る',
      nextText: '次へ'
    }
  },
  computed: {
    ...mapState([
      'selectedAnswers',
      'userName',
      'userGender',
      'userBirth',
      'selectedLikeAnimals',
      'impressions',
    ]),
    sentNextBtn() {
      return this.$router.options.routes.length-1 !== this.count
    },
    sentTextStyle() {
      return {
        'primary': this.nextText === '回答を送信する'
      }
    }
  },
  methods: {
    ...mapMutations([
      'setProgressStatus',
      'setUserName',
      'setUserGender',
      'setUserBirth',
      'setLikeAnimals',
      'setImpressions'
    ]),
    nextQuestion(event) {
      let routesLength = this.$router.options.routes.length-1

      if (this.count < routesLength) {
        this.count++
        this.range+=20
        this.$router.push({ name: `q${this.count}` })
        this.setProgressStatus({
          progressRange: [this.range, this.range+20],
          event
        })
      }
      if (this.count === routesLength-2) {
        this.nextText = '回答内容を確認する'
      }
      if (this.count === routesLength-1) {
        this.nextText = '回答を送信する'
      }
    },
    prevQuestion(event) {
      if (this.count > 1) {
        this.count--
        this.range-=20
        this.$router.push({ name : `q${this.count}` })
        this.setProgressStatus({
          progressRange: [this.range, this.range+20],
          event
        })
      }
      if (this.count === 4) {
        this.nextText = '次へ'
      }
      if (this.count === 5) {
        this.nextText = '回答内容を確認する'
      }
    },
    resetAnswers() {
      this.count = 1
      this.range = 0
      this.nextText = '次へ'
      this.setUserName('名無し')
      this.setUserGender(0)
      this.setUserBirth(null)
      this.setLikeAnimals([])
      this.setImpressions('')
      this.setProgressStatus({
        progressRange: [this.range, this.range+20],
        event
      })
    }
  }
}
</script>

<style scoped>
.pager {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 0 auto;
}
</style>