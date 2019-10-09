<template>
  <div>
    <h2 class="mb-4">あなたの {{ q1.question_title }} を教えて下さい</h2>
    <v-text-field
      v-model="accessorUserName"
      :label="q1.question_title"
      :value="accessorUserName"
      :rules="[rulesCounter(`${q1.question_title}`)]"
      outlined
      v-focus
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    q1: {
      type: Object
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.children[0].children[0].children[1].children[1].focus()
      }
    }
  },
  computed: {
    ...mapState([
      'userName',
      'rulesRequired',
      'rulesCounter'
    ]),
    accessorUserName: {
      get() {
        return this.userName
      },
      set(userNameValue) {
        this.setUserName(userNameValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setUserName'])
  }
}
</script>