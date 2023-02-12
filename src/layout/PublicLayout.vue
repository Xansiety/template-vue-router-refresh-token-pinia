<script setup>
import NavBar from '../components/NavBar.vue'

</script> 

<template>
    <NavBar />
    <div class="container">
        <div class="row">
            <div class="col-12">
                <RouterView />
            </div>
        </div>
    </div>
</template> 

<style lang='scss' scoped>

</style>