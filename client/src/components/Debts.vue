<template>
  <items :items="debts" :title="title"></items>
</template>

<script>
import DebtsService from '@/services/DebtsService'
import Items from '@/components/Items'
export default {
  name: 'debts',
  data () {
    return {
      debts: [],
      title: 'Debts'
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
  },
  components: {
    Items: Items
  }
}
</script>
