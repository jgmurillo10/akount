<template>
  
  <v-layout row wrap fill-width >
  <v-btn @click="openModal" :color="color" large class="btn" >
        <v-icon dark>add</v-icon>
        <h2>Add {{ bill }} ({{ cash }})</h2>
      </v-btn>
    <v-dialog  v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" >
      <v-card>
        <v-toolbar dark :color="color">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Add {{ bill }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-title>
          <span class="headline">Here you can create a new {{ bill }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  chips
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'AddItem',
  props: {
    bill: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  methods: {
    openModal () {
      this.dialog = true
    }
  },
  computed: {
    color () {
      return this.bill === 'debt' ? 'error' : 'success'
    },
    cash () {
      return this.bill === 'debt' ? 'cash-out' : 'cash-in'
    }
  }
}
</script>
<style>
.btn {
  margin: 0;
  padding: 0;
  width: 99.5%;
  height: 140px;
}
</style>
