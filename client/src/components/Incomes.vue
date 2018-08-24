<template>
  <items :items="incomes" :title="title"></items>
</template>

<script>
import IncomesService from '@/services/IncomesService'
import Items from '@/components/Items'
export default {
  name: 'incomes',
  data () {
    return {
      incomes: [],
      title: 'Incomes'
    }
  },
  mounted () {
    this.getIncomes()
  },
  methods: {
    async getIncomes () {
      const response = await IncomesService.fetchIncomes()
      this.incomes = response.data
    }
  },
  components: {
    Items: Items
  }
}
</script>
