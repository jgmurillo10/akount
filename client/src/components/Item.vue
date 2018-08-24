<template>
  <v-card color="white">
    <v-card-title primary-title>
      <div>
        <div class="headline">${{ data.value }}</div>
        <span class="grey--text">{{ data.description }}</span>
      </div>
    </v-card-title>

    <v-card-text>
      <p>
        <v-icon>date_range</v-icon>
        {{ data.deadline_date }}
      </p>
      <p>
        <v-icon>alarm</v-icon>
        {{ data.alert_date }}
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn flat color="green"><v-icon>payment</v-icon>Pay</v-btn>
      <v-btn flat color="blue"><v-icon>edit</v-icon>Edit</v-btn>
      <v-btn flat color="red"><v-icon>delete</v-icon>Delete</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        <v-icon>short_text</v-icon>Extra content
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default{
  name: 'item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.headline {
  margin-left: 0;
  padding-left: 0;
}
p {
  text-align: left;
}
</style>
