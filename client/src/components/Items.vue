<template>
  <v-container grid-list-md  >
    <h1>{{ title }}</h1>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="item in items" :key="item.id">
        <item  :id="item.id" :description="item.description" :data="item"></item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Item from '@/components/Item'
export default {
  name: 'items',
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Item: Item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  h1 {
    text-align: left;
  }
</style>
