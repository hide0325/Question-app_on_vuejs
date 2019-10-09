<template>
  <div>
    <h2 class="mb-4">最後にアンケートの{{ q5.question_title }}を教えて下さい</h2>
    <v-textarea
      v-model="accessorImpressions"
      :rules="[rulesRequired(`${q5.question_title}`), rulesTextArea(20, 200)]"
      counter
      class="mb-4"
    />    
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q5: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'impressions',
      'rulesRequired',
      'rulesTextArea'
    ]),
    accessorImpressions: {
      get() {
        return this.impressions
      },
      set(impressionsValue) {
        this.setImpressions(impressionsValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setImpressions'])
  }
}
</script>