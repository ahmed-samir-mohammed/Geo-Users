<template>
    <div class="map">
        <div class="google-map" id="map">
            <GmapMap
                :center="{
                    lat: 0, 
                    lng: 0
                }"
                :zoom="7"
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
        }
    },

    mounted() {
        console.log(firebase.auth().currentUser)
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