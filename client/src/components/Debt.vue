<template>
  <div class="debt">
    <h1>Debt</h1>
    This file will show the debt.
    <p> {{ debt }} </p>
  </div>
</template>

<script>
import DebtsService from '@/services/DebtsService'
export default {
  name: 'debt',
  data () {
    return {
      debt: ''
    }
  },
  mounted () {
    this.getDebt()
  },
  methods: {
    async getDebt () {
      const response = await DebtsService.fetchDebtById(1)
      this.debt = response.data
    }
  }
}
</script>
