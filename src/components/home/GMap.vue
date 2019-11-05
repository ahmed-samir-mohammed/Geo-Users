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
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'GMap',
    data() {
        return {
            center: { 
                lat: 0, 
                lng: 0
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
            db.collection('users').get().then(users => {
                users.docs.forEach(doc => {
                    let data = doc.data()
                    console.log(data)
                    if (data.geolocation) {
                        console.log(data.geolocation)
                        // let marker = new google.map.Marker({
                        //     position: {
                        //         lat: data.geolocation.lat,
                        //         lng: data.geolocation.lng
                        //     },
                        //     map
                        // })
                    }
                })
            })
        }
    },
    mounted() {
        // get current user
        let user = firebase.auth().currentUser

        // Get User Geo Location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude
                this.lng = pos.coords.longitude

                // find the user record and then update geocoords
                db.collection('users').where('user_id', '==', user.uid).get().then(snapshot => {
                    snapshot.forEach((doc) => {
                        db.collection('users').doc(doc.id).update({
                            geolocation: {
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude  
                            }
                        })
                    })
                }).then(() => {
                    this.geolocate()
                })
            }, (err) => {
                console.log(err)
            })
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