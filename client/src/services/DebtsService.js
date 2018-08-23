import Api from '@/services/Api'

export default {
  fetchDebts () {
    return Api().get('debts')
  },
  fetchDebtById (id) {
    return Api().get(`debts/${id}`)
  }
}
