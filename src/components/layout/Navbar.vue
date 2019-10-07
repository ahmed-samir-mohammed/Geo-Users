<template>
    <div class="navbar">
        <nav class="deep-purple darke">
            <div class="container">
                <a class="left brand-logo">
                    <router-link :to="{name: 'GMap'}">GeoUsers!</router-link>
                </a>
                <ul class="right">
                    <li><router-link :to="{name: 'SignUp'}">SignUp</router-link></li>
                    <li><router-link :to="{name: 'LogIn'}">LogIn</router-link></li>
                    <li><a @click="logOut">LogOut</a></li>
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

        }
    },
    methods: {
        logOut () {
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'LogIn'})
            })
        }
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