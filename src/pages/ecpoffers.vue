<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
            <md-card>                
                <md-card-media-cover>
                    <md-card-media>
                    <img class="img" :src="cardUserImage1" alt="Skyscraper">
                    </md-card-media>
                </md-card-media-cover>                
                <md-card-content>
                   <div class="md-title">ENROLL BY 12/31/18</div><br>
                    <div class="md-subhead"><p>The Essilor Ultimate Lens Package offers a single lens that brings together three innovative technologies from Varilux®, Crizal®, Eyezen™+, and Transitions®. Just like last year, we’re helping you offer your patients their best in vision, clarity, and protection in one pair of lenses
                        <router-link to="/ecpoffers/cardUserImage1">Details</router-link>
                    </p>
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
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
            <md-card>                
                <md-card-header data-background-color="green">
                    <span><img :src="cardUserImage2"></span>
                </md-card-header>
                <md-card-content>
                   <div class="md-title">ENROLL BY 12/31/18</div><br>
                    <div class="md-subhead"><p>The Essilor Ultimate Lens Package is more than our latest innovation. It’s a single lens that brings together three innovative technologies.
                        <router-link to="/ecpoffers/cardUserImage2">Details</router-link>
                    </p>
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
        } */
    },
    computed: {
        cardUserImage1: function () {
                return 'https://s3-us-west-2.amazonaws.com/ecppro-assets/dev/offers/offer1/offer_img_1.jpg'
            },
        cardUserImage2: function () {
                return 'https://s3-us-west-2.amazonaws.com/ecppro-assets/dev/offers/offer3/offer_img_3.jpg'
            }
    }
}
</script>
