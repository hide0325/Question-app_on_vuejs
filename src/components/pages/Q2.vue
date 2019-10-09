<template>
  <div>
    <h2 class="mb-4">あなたの{{ q2.question_title }}を教えて下さい</h2>
    <v-radio-group
      v-model="accessorUserGender"
      :rules="[rulesRadio(`${q2.question_title}`)]"
    > 
      <v-radio
        v-for="n in Object.entries(q2.question_values)"
        :key="n[1]"
        :value="Number(n[0])"
        :label="n[1]"
      />
    </v-radio-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q2: {
      type: Object
    }
  },
  computed: {
    ...mapState([
      'userGender',
      'rulesRadio'
    ]),
    accessorUserGender: {
      get() {
        return this.userGender
      },
      set(userGenderValue) {
        this.setUserGender(userGenderValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setUserGender'])
  }
}
</script>