import Api from '@/services/Api'

export default {
    getLabs () {
      return Api().get()
    },
    getLabsById(param) {
      return Api().get(/param/)
    }
  }