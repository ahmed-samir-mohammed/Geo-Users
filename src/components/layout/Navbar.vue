<template>
    <div class="navbar">
        <nav class="deep-purple darke">
            <div class="container">
                <a href="" class="left brand-logo">GeoUsers</a>
                <ul class="right">
                    <li><a href="">SignUp</a></li>
                    <li><a href="">LogIn</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {

        }
    }
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