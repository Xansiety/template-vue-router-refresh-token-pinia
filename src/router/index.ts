import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useUserStore } from "../stores/useUserStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes,
});

// ¿por que muchos if? , resisando la documentación de vue-router,
// se menciona que se debe de usar de esta forma: https://router.vuejs.org/guide/advanced/navigation-guards.html#optional-third-argument-next
// sin embargo podemos usar un return para que no se ejecute el resto del código y evitar el uso de else
router.beforeEach(async (to, from, next) => {
  // estatus del usuario que seteamos en el sessionStorage desde que se loguea
  const isAuthenticated = sessionStorage.getItem("user") === "authorized";
  // si la ruta requiere estar autenticado para visualizarla
  const requiredAuth = to.meta.requiresAuth;
  //User store para obtener el token
  const userStore = useUserStore();
  console.log({ requiredAuth, isAuthenticated, token: userStore.userToken });
  // si existe el token en memoria y esta autenticado el usuario
  if (requiredAuth && userStore.userToken !== undefined) {
    console.log("existe token y requiere autentificación", {
      JWT: userStore.userToken,
    });
    return next();
  }
  // si no existe el token (se refrescó el sitio web) el token deja de existir ya que solo lo colocamos en memoria no en el local o session storage, y esta autenticado el usuario
  else if (
    requiredAuth &&
    isAuthenticated &&
    userStore.userToken === undefined
  ) {
    console.log(
      "Se recargo sitio -> No existe token pero esta autenticado el usuario :: onRefreshToken ⚡",
      { isAuthenticated }
    );
    await userStore.refreshToken(); // obtenemos el  nuevo token
    if (userStore.userToken) {
      //el usuario se coloco correctamente en el store
      console.info("se obtuvo un usuario y refresh valido", {
        JWTDespuesDeRefrescar: userStore.userToken,
      });
      return next();
    }
    //ocurrió un error y no se pudo colocar el usuario en el store
    console.error("no se pudo obtener un refresh y usuario valido");
    userStore.logoutUser(); // sacamos al usuario
    return next({ name: "login" });
  }
  // el usuario esta autenticado y quiere ingresar al login
  else if (!requiredAuth && isAuthenticated && to.name === "login") {
    console.log(
      "No se requiere autenticación, pero el usuario esta logueado y quiere ingresar al login"
    );
    return next({ name: "home" });
  }
  // se intenta ingresa a una ruta protegida y el usuario no esta autenticado
  else if (requiredAuth && !isAuthenticated) {
    userStore.logoutUser(); // sacamos al usuario
    return next({ name: "login" });
  } else {
    console.log("No hay datos para validar");
    //dejamos pasar a la vista
    return next();
  }
});

export default router;
