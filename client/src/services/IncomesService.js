import Api from '@/services/Api'

export default {
  fetchIncomes () {
    return Api().get('receivables')
  },
  fetchRIncomeById (id) {
    return Api().get(`receivables/${id}`)
  }
}
