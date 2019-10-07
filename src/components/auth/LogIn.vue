<template>
    <div class="signup container">
        <form @submit.prevent="logIn" class="card-panel">
            <h2 class="center deep-purple-text">LogIn</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
                <p class="red-text center" v-if="feedback"> {{ feedback }} </p>
            <div class="field center">
                <button class="btn deep-purple">SignUp</button>
            </div>
        </form>
    </div>
</template>     

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'SignUp',  
    data() {
        return {
            email: null,
            password: null,
            feedback: null,
        }
    },
    methods: {
        logIn () {
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(USERS => {
                    console.log(USERS)
                }).then(() => {
                    this.$router.push({name: 'GMap'})
                }).catch(err => {
                    this.feedback = err.message
                })
                this.feedback = null
            } else {
                this.feedbackFalse = 'Please Enter Your Email And Password'
            }
        }
    }
}
</script>

<style>
    .signup {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }

    .signup .card-panel {
        width: 40%;
    }
    h2 {
        font-size: 2.5rem
    }
    .btn {
        margin-top: 2rem;
    }
    @media (max-width: 767px) {
        .signup .card-panel {
            width: 80%;
        }
    }
</style>