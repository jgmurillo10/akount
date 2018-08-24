<template>
  <div id="app">
    <v-app>
      <v-toolbar app fixed clipped-left>
        <img id="logo" src="./assets/piggy_ed.svg">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat :to="'/'">Overview</v-btn>
          <v-btn flat :to="'/debts'">Debts</v-btn>
          <v-btn flat :to="'/incomes'">Receivables</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <div>
            <h1 class="main-title"> {{ title }}</h1>
          </div>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      icons: ['dashboard', 'home', 'event'],
      title: 'Easy Piggy'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600');
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
#logo {
  width: 40px;
  color: rgba(255,255,255,0.3);
}
.main-title {
  font-size: 39pt;
  font-weight: 100;
}

</style>
