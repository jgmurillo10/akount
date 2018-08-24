<template>
<v-container grid-list-md text-xs-center>
  <p id="date">Today is {{ today }}.</p>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card class="card-single" dark color="white">
          <AddItem :bill="'debt'"></AddItem>
      </v-card>
    </v-flex>

    <v-flex xs12 md6>
      <v-card class="card-single" dark color="white">
          <AddItem :bill="'income'"></AddItem>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 >
      <v-card class="card-double" color="white">
        <v-card-title primary-title>
          <div>
            <div class="headline">General balance</div>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="money"  id="balance">$193.352.00</div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-flex xs12>
        <v-card class="card-single" color="white" :to="'/debts'">
          <v-card-title primary-title>
            <div>
              <div class="headline">Total debt 😭</div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">
            <div class="money">$23.352.00</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card class="card-single" color="white" :to="'/incomes'">
          <v-card-title primary-title>
            <div>
              <div class="headline">Total income 🤑</div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">
            <div class="money">$230.352.00</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>

    <v-flex xs12 md6>
      <v-card class="card-single" color="white">
        <v-card-text>
          <h2>
            Most +
          </h2>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card class="card-single" color="white">
        <v-card-text >
          <h2>
            Most -
          </h2>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AddItem from '@/components/AddItem'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default {
  name: 'Overview',
  data () {
    return {
    }
  },
  mounted () {
    this.hello()
  },
  methods: {
    async hello () {
    }
  },
  computed: {
    today () {
      const date = new Date()
      const month = months[date.getMonth()]
      const day = date.getDate().toString()
      let lastDigit = day.split('')[1] ? day.split('')[1] : day.split('')[0]
      lastDigit = +(lastDigit)
      const suffix = lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th'
      return `${month} ${day}${suffix}`
    }
  },
  components: {
    AddItem: AddItem
  }
}
</script>

<style>
.card-single {
  height: 140px;
  margin: 0;
  padding: 0;
}
.card-double {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

.money {
  font-size: 30pt;
  font-weight: 500;
}

#balance {
  font-size: 5rem;
  font-weight: 500;
}

#date {
  text-align: right;
  font-size: 2em;
}

h2 {
  font-size: 2em;
  text-transform: capitalize;
}

.btn {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 140px;
}
</style>
