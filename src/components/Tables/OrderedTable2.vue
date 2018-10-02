<template v-if="forecasts">
  <div>  
    <md-table v-model="labs" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="State">{{ item.state }}</md-table-cell>
        <md-table-cell md-label="Zip">{{ item.zip }}</md-table-cell>
        <md-table-cell md-label="Channel">{{ item.channel }}</md-table-cell>
      </md-table-row>
    </md-table>      
  </div>  
</template>

<script>
import OnePortalService from '@/services/ECPOnePortalService.js'

export default {
  name: 'ordered-table2',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data() {
      return {
      labs: null
    }
  },
  methods: {
      async getLabs () {
        const response = await OnePortalService.getLabs()

        //console.log("getLabs")
        //console.log(response.data)
       
        this.labs = response.data        
      }
  },
  created: function () {
    this.getLabs()
  } 
}
</script>
