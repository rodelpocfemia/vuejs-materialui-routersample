<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">ECP One Portal</h4>
                    <p class="category">Displays list of Labs</p>                                     
                </md-card-header>
                <md-card-content>
                    <ordered-table2 table-header-color="orange"></ordered-table2>                  
                </md-card-content>
            </md-card>
        </div>        
    </div>   
</div>
</template>
<script>
import { 
  StatsCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  OrderedTable2
} from '@/components'

export default{
    props: {
        cardUserImage1: {
            type: String,
            default: require('@/assets/img/tim_80x80.png')
        },
        cardUserImage2: {
            type: String,
            default: require('@/assets/img/faces/marc.jpg')
        }
    },
    components: {
        StatsCard,
        NavTabsCard,
        NavTabsTable,
        OrderedTable,
        OrderedTable2
    }
}
</script>