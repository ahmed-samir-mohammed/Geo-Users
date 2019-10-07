<template>
    <div class="signup container">
        <form @submit.prevent="signUp" class="card-panel">
            <h2 class="center deep-purple-text">LogIn</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
                <p class="red-text center" v-if="feedbackFalse"> {{ feedback }} </p>
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
            feedbackFalse: null,
            feedbackTrue: null,
            slug: null
        }
    },
    methods: {
        signUp () {
            if  (this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!-:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if (doc.exists) {
                        this.feedbackFalse = 'This Alias Already Exists'
                    } else {
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(USERS => {
                            // console.log(USERS)
                            ref.set({
                                alias: this.alias,
                                geolocation: null,
                                user_id: USERS.user.uid
                            })
                        }).then(() => {
                            this.$router.push({name: 'GMap'})
                        }).catch(err => {
                            console.log(err)
                            this.feedbackFalse = err.message
                            this.feedbackTrue = null
                        })
                        this.feedbackTrue = 'This Alias is Free'
                        this.feedbackFalse = null
                    }
                })
                
            } else {
                this.feedbackFalse = 'Please Enter Your Alias'
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