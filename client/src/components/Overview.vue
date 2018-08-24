<template>
<v-container grid-list-md text-xs-center >
  <p id="date">Today is {{ today }}.</p>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card class="card-single" dark color="white">
          <v-btn color="error" dark large class="btn">
            <v-icon dark>add</v-icon>
            <h2>Add debt (cash-out)</h2>
          </v-btn>
      </v-card>
    </v-flex>

    <v-flex xs12 md6>
      <v-card class="card-single" dark color="white">
          <v-btn color="success" dark large class="btn">
            <v-icon dark>add</v-icon>
            <h2>Add income (cash-in)</h2>
          </v-btn>
      </v-card>
    </v-flex>
      <v-flex xs12 md6 >
        <v-card class="card-double" color="white">
          <v-card-text class="px-0">
            <h2>
              General balance
            </h2>
            <span class="money"  id="balance">$193.352.00</span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-flex xs12>
          <v-card class="card-single" color="white" :to="'/debts'">
            <v-card-text class="px-0">
              <h2>
                Total debt 😭
              </h2>
              <span class="money"> $23.352.00</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card class="card-single" color="white" :to="'/receivables'">
            <v-card-text class="px-0">
              <h2>
                Total income 🤑
              </h2>
              <span class="money">$230.352.00</span>
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
  height: 100%;
  margin: 0;
  padding: 0;
}

.btn {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.money {
  font-size: 40pt;
  font-weight: 500;
}

#balance {
  font-size: 60pt;
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
</style>
