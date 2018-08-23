<template>
  <div class="debts">
    <h1>Debts</h1>
    This file will list all the debts.

    <div v-for="debt in debts" :key="debt.description">
      <p>
        <span>{{ debt.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import DebtsService from '@/services/DebtsService'
export default {
  name: 'debts',
  data () {
    return {
      debts: []
    }
  },
  mounted () {
    this.getDebts()
  },
  methods: {
    async getDebts () {
      const response = await DebtsService.fetchDebts()
      this.debts = response.data
    }
  }
}
</script>
