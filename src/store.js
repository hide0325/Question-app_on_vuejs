import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: null,
    userName: '名無し',
    userGender: 0,
    userBirth: null,
    userBirthItems: null,
    likeAnimals: null,
    selectedLikeAnimals: [],
    impressions: '',

    progressMin: 0,
    ProgressMax: 100,
    progressRange: [0, 20],
    progressTexts: [
      { text: '名前' },
      { text: '性別' },
      { text: '生年月日' },
      { text: '動物' },
      { text: '感想' }
    ],
    
    valid: false,
    rulesRequired: props => value => !!value || `${props}は必須項目です。`,
    rulesCounter: props => value => value.length <= 20 || `${props}は最大20文字です。`,
    rulesRadio: props => value => value !== 0 || `${props}は必須項目です。`,
    rulesCheckBox: value => value.length > 0 || '',
    rulesTextArea: (min, max) => value => {
      if (value === undefined) {
        return false
      } else {
        return value.length > 20 && value.length < 200 || `${min}文字以上${max}文字以内で入力お願いします。`
      }
    }
  },

  actions: {
    async fetchQuestions({ dispatch }) {
      try {
        const API = '/api/backEnd.json'
        const DATA = await axios.get(API)
        const questions = DATA.data
        dispatch('fetchQuestionsAll', questions)
        // throw new Error('エラー発生')
      } catch (error) {
        console.log(error)
      }
    },

    fetchQuestionsAll ({ commit, dispatch }, questions) {
      commit('getQuestions', questions)
      dispatch('fetchUserGender', questions[1])
      dispatch('fetchUserBirth', questions[2])
      dispatch('fetchLikeAnimals', questions[3])
    },
    fetchUserGender({ commit }, userGender) {
      commit('getUserGender', userGender)
    },
    fetchUserBirth({ commit }, userBirth) {
      commit('getUserBirth', userBirth)
    },
    fetchLikeAnimals({ commit }, likeAnimals) {
      commit('getLikeAnimals', likeAnimals)
    }
  },

  mutations: {
    getQuestions(state, questions) {
      state.questions = questions
    },
    getUserGender(state, userGender) {
      state.userGender = Number(Object.keys(userGender.question_values)[0])
    },
    getUserBirth(state, userBirth) {
      state.userBirthItems = Object.values(userBirth.question_values)
    },
    getLikeAnimals(state, likeAnimals) {
      state.likeAnimals = Object.values(likeAnimals.question_values)
    },

    setUserName(state, userNameValue) {
      state.userName = userNameValue
    },
    setUserGender(state, userGenderValue) {
      state.userGender = userGenderValue
    },
    setUserBirth(state, userBirthValue) {
      state.userBirth = userBirthValue
    },
    setLikeAnimals(state, likeAnimalsValue) {
      state.selectedLikeAnimals = likeAnimalsValue
    },
    setImpressions(state, impressionsValue) {
      state.impressions = impressionsValue
    },

    setProgressStatus(state, { progressRange }) {
      state.progressRange = progressRange
    },
    setProgressRange(state, progressRange) {
      state.progressRange = progressRange
    },    
    setValid(state, valid) {
      state.valid = valid
    }
  }
})
