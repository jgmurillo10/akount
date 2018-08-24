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
        {{ deadline }}
      </p>
      <p>
        <v-icon>alarm</v-icon>
        {{ alert }}
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
        <div class="extra-content">
          <p><b>Actor: </b>{{ data.actor }}</p>
          <p><b>Actor type: </b>{{ data.actor_type }}</p>
          <p><b>Interest rate: </b>{{ data.interest_rate }}%</p>
          <p><b>Type: </b>{{ data.type }}</p>
          <p><b>Last updated: </b>{{ new Date(data.updatedAt).toString() }}</p>
          <p><b>Created at: </b>{{ new Date(data.createdAt).toString() }}</p>
        </div>
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
  },
  computed: {
    deadline () {
      return new Date(this.data.deadline_date).toString()
    },
    alert () {
      return new Date(this.data.alert_date).toString()
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
.extra-content {
  text-align: left;
}
</style>
