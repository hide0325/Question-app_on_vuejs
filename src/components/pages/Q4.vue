<template>
  <div class="mb-4">
    <h2 class="mb-4">好きな{{ q4.question_title }}を教えて下さい</h2>
      <div
        v-for="animal in likeAnimals"
        :key="animal"
      >
        <v-checkbox
          v-model="accessorLikeAnimals"
          :value="animal"
          :label="animal"
          :rules="[rulesCheckBox]"
          hide-details
        />
      </div>
      <transition
        :key="valid"
        name="valid"
      >
        <p
          v-if="!valid"
          ref="valid"
          class="error--text"
        >好きな{{ q4.question_title }}は{{ errorMsg }}</p>
      </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q4: {
      type: Object
    },
    valid: {
      type: Boolean
    } 
  },
  data () {
    return {
      errorMsg: '必須項目です'
    }
  },
  computed: {
    ...mapState([
      'likeAnimals',
      'selectedLikeAnimals',
      'rulesCheckBox'
    ]),
    accessorLikeAnimals: {
      get() {
        return this.selectedLikeAnimals
      },
      set(likeAnimalsValue) {
        this.setLikeAnimals(likeAnimalsValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setLikeAnimals'])
  },
  mounted() {
    this.$nextTick()
      .then(() => {
        if (this.$refs.valid !== undefined) this.$refs.valid.style.display = 'none'
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
</script>

<style scoped>
.v-input {
  margin-top: 0;
}
@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}
.valid-enter {
  opacity: 0;
  position: absolute;
  animation-duration: .25s;
  animation-fill-mode: both;
}
.valid-enter-active {
  animation-duration: .25s;
  animation-fill-mode: both;
  animation-name: slideInDown;
  transition: opacity .3s;
}
.valid-leave-to {
  opacity: 0;
  position: absolute;
  animation-duration: .25s;
  animation-fill-mode: both;
}
.valid-leave-active {
  animation-duration: .25s;
  animation-fill-mode: both;
  animation-name: slideOutUp;
  transition: opacity .3s;
}
</style>