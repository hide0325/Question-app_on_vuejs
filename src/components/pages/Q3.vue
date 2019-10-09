<template>
  <div>
    <h2 class="mb-4">あなたの{{ q3.question_title }}を教えて下さい</h2>
    <v-select
      v-model="accessorUserBirth"
      outlined
      :items="userBirthItems"
      :value="accessorUserBirth"
      :rules="[rulesRequired('生年月日')]"
      @change="setUserBirth"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q3: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'userBirth',
      'userBirthItems',
      'rulesRequired'
    ]),
    accessorUserBirth: {
      get() {
        return this.userBirth
      },
      set(userBirthValue) {
        this.setUserBirth(userBirthValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setUserBirth'])
  }
}
</script>