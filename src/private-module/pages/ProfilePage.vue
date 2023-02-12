<script setup>
import { useUserAuth } from '../../composables/useUserAuth';
const { userData, logoutUser } = useUserAuth();
</script> 

<template>
    <h1> Perfil Pagina Privada</h1>

    <code>
        {{ userData }}
    </code>

    <br>
    
    <button @click="logoutUser" class="btn btn-danger">Logout</button>
</template> 

<style lang='scss' scoped>

</style>