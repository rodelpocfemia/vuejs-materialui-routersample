<template>
    <div class="content">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-70">
            <md-card>                                
                <md-card-header data-background-color="purple">
                    <h2>THE ULTIMATE OFFER IS BACK!</h2>
                    <span><img v-bind:src="this.cardUserImage"></span>
                    
                </md-card-header>
                <md-card-content>
                   <div class="md-title">ENROLL BY 12/31/18</div><br>
                    <div class="md-subhead"><p>The Essilor Ultimate Lens Package offers a single lens that brings together three innovative technologies from Varilux®, Crizal®, Eyezen™+, and Transitions®. Just like last year, we’re helping you offer your patients their best in vision, clarity, and protection in one pair of lenses.</p>
                    </div>     
                </md-card-content>                
                <md-card-actions>                    
                    <md-button class="md-icon-button md-primary">
                        <md-icon>favorite</md-icon>
                    </md-button>

                    <md-button class="md-icon-button md-primary">
                        <md-icon>bookmark</md-icon>
                    </md-button>

                    <md-button class="md-icon-button md-primary">
                        <md-icon>share</md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>
<script>
export default{ 
  props: {
      /*
        cardUserImage1: {
            type: String,
            default: require('@/assets/img/tim_80x80.png')
        },
        cardUserImage2: {
            type: String,
            default: require('@/assets/img/faces/marc.jpg')
        }    */    
  },
  computed: {   
        cardUserImage: function () {
                if (this.$route.params.id == "cardUserImage1")
                    return 'https://s3-us-west-2.amazonaws.com/ecppro-assets/dev/offers/offer1/offer_img_1.jpg'
                else
                    return 'https://s3-us-west-2.amazonaws.com/ecppro-assets/dev/offers/offer3/offer_img_3.jpg'
            }
    },
    mounted() {
        //this.img = this.$route.params.id
        console.log('mounted param',this.cardUserImage)
    },
    created() {        
        console.log('created param',this.cardUserImage)
    }
}
</script>
