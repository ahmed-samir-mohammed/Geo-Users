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
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
            </GmapMap>
        </div>
    </div>
</template>

<script>
import google from 'vue2-google-maps'
export default {
    name: 'GMap',
    data() {
        return {
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