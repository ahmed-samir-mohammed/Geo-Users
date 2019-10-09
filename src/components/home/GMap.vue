<template>
    <div class="map">
        <div class="google-map" id="map">
            <GmapMap
                :center="{
                    lat: this.center.lat, 
                    lng: this.center.lng
                }"
                :zoom="16"
                map-type-id="terrain"
            >
            </GmapMap> 
        </div>
    </div>
</template>

<script>
import google from 'vue2-google-maps'
import firebase from 'firebase'
export default {
    name: 'GMap',
    data() {
        return {
            center: { 
                lat: 45.508, 
                lng: -73.587 
            },
            markers: [],
            places: [],
            currentPlace: null
        }
    },
    methods: {
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    },
    mounted() {
        // Get User Geo Location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude
                this.lng = pos.coords.longitude
                this.geolocate()
            }, (err) => {
                console.log(err)
                this.geolocate()
            }, {maximumAge: 6000, timeout: 1000})
        } else {
            // Position Center By Default Values
            this.geolocate();
        }
    }
}
</script>

<style>
    .vue-map-container {
        width: 100%;
        height: 100vh;
        z-index: -1;
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>