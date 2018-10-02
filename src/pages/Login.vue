<template>
<div class="content">
    <div class="md-layout">
    <form @submit.prevent="login" autocomplete="off">
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title"><md-icon>person</md-icon> Login</h4>
        <p v-if="$route.query.redirect">You need to login first.</p>
        <p v-if="error" class="error">Bad login information</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">          
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Password</label>
              <md-input v-model="pass" type="password"></md-input>
            </md-field>
          </div> 
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" type="submit">Login</md-button>
          </div>  
        </div>
      </md-card-content>
    </md-card>
    </form>
    </div>
</div> 
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from '@/components'
import auth from '../auth'

  export default {
    components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
    },
    data () {
      return {
        email: '',
        pass: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
