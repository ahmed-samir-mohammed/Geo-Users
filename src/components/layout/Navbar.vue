<template>
    <div class="navbar">
        <nav class="deep-purple darke">
            <div class="container">
                <a class="left brand-logo">
                    <router-link :to="{name: 'GMap'}">GeoUsers!</router-link>
                </a>
                <ul class="right">
                    <li v-if="!user"><router-link :to="{name: 'SignUp'}">SignUp</router-link></li>
                    <li v-if="!user"><router-link :to="{name: 'LogIn'}">LogIn</router-link></li>
                    <li v-if="user"><a> {{ user.email }} </a></li>
                    <li v-if="user"><a @click="logOut">LogOut</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data () {
        return {
            user: null
        }
    },
    methods: {
        logOut () {
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'LogIn'})
            })
        }
    },
    created() {
        let user = firebase.auth().currentUser
        console.log(user)
        firebase.auth().onAuthStateChanged((user) => {
            // console.log(user)
            if (user) {
                // console.log(user)
                this.user = user                
            } else {
                this.user = null
            }
        })
    },
}
</script>

<style>
    .navbar {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
    }
</style>