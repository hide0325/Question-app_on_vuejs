<template>
  <v-container
    :class="sentContainerStyle"
    class="container-top"
  >
    <v-flex>

      <v-toolbar-title class="text-uppercase my-5 indigo--text">
        <span class="title">Question-App</span>
        <span class="title font-weight-light">_on_vue.js</span>
      </v-toolbar-title>
      <v-form v-model="accessorValid">  
        <transition v-if="questions">
          <router-view
            :q1="questions[0]"
            :q2="questions[1]"
            :q3="questions[2]"
            :q4="questions[3]"
            :q5="questions[4]"
            :valid="accessorValid"
          />
        </transition>
      </v-form>
       <Pager :accessorValid="accessorValid"/>

    </v-flex>
  </v-container>
</template>

<script>
import Q1 from '@/components/pages/Q1'
import Q2 from '@/components/pages/Q2'
import Q3 from '@/components/pages/Q3'
import Q4 from '@/components/pages/Q4'
import Q5 from '@/components/pages/Q5'
import Pager from '@/components/Pager'

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Pager
  },
  computed: {
    ...mapState(['questions', 'valid']),
    accessorValid: {
      get() {
        return this.valid
      },
      set(valid) {
        this.setValid(valid)
      }
    },
    sentContainerStyle() {
      return {
        '--sent': this.$route.name === 'q7'
      }
    }
  },
  methods: {
    ...mapActions(['fetchQuestions']),
    ...mapMutations(['setValid'])
  },
  created() {
    this.fetchQuestions()
  }
}
</script>

<style>
#app .container {
  max-width: 768px;
}
.container-top {
  margin-top: 32px;
}
.--sent {
  margin-top: 0;
}
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}
.v-enter {
  opacity: 0;
  position: absolute;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.v-enter-active {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: slideInLeft;
  transition: opacity .5s;
}
.v-leave-to {
  opacity: 0;
  position: absolute;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.v-leave-active {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: slideOutRight;
  transition: opacity .5s;
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
</style>