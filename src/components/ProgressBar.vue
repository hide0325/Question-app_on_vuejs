<template>
  <div
    v-if="$route.name !== 'q7'"
    class="progressWrap mb-5"
  >
    <v-range-slider
      v-model="accessorProgressRange"
      :min="progressMin"
      :max="progressMax"
      hide-details
      readonly
    >
    </v-range-slider>
      <div class="progressTexts">
        <div      
          v-for="(text, index) in progressTexts"
          :key="text.text"
          v-html="text.text"
          class="progressText pl-2"
          :class="[`q${index+1}` === $route.name ? 'router-link-active': '']"
        >
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      range: 20
    }
  },
  computed: {
    ...mapState([
      'progressMin',
      'progressMax',
      'progressRange',
      'progressTexts'
    ]),
    accessorProgressRange: {
      get() {
        return this.progressRange
      },
      set(progressRange) {
        this.setProgressRange(progressRange)
      }
    }
  },
  methods: {
    ...mapMutations(['setProgressStatus', 'setProgressRange'])
  }
}
</script>

<style scoped>
.v-input >>> .v-slider {
  margin: 0;
}
.v-input >>> .v-slider__track-container {
  height: 100%;
}
.v-input >>> .primary--text {
  display: none;
}
.progressWrap {
  position: fixed;
  z-index: 9999;
  width: 100%;
}
.progressTexts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.progressText {
  flex-basis: 20%;
  height: 100%;
  line-height: 32px;
  position: relative;
  font-size: 12px;
}
.router-link-active {
  color: #FFF;
}
</style>