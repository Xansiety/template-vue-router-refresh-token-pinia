<script setup>
import { useUserAuth } from '../../composables/useUserAuth';
import { ref } from 'vue';

const { singInUser } = useUserAuth();
const credentials = ref({
    usuario: '',
    password: ''
})

const onSubmit = async () => {
    // Por favor asegúrate de que el usuario y la contraseña sean correctos, implementar la lógica de validación
    // pasa las validaciones, entonces llama a la funcion singInUser
    const respuesta = await singInUser({ usuario: credentials.value.usuario, password: credentials.value.usuario });
    // si el usuario se logueo correctamente y mostrar un mensaje de error 
}
</script> 

<template>
    <h1> Login Page </h1>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="credentials.email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="credentials.password">
        </div>
        <button type="submit" class="btn btn-primary">
            Submit
        </button>
    </form>

</template> 

<style lang='scss' scoped>

</style>