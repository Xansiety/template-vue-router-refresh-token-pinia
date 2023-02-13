import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router/index";

export const useUserStore = defineStore("user", () => {
  const userData = ref(null);
  const userToken = ref(undefined);
  const expiresTokenIn = ref(undefined);
  const loadingUser = ref(false);

  const setCurrentUserData = ({
    usuario,
    rol,
    accessToken,
    expiresInMinutes,
  }) => {
    console.log({ expiresInMinutes });
    userData.value = {
      usuario,
      rol,
    };
    userToken.value = accessToken;
    expiresTokenIn.value = expiresInMinutes;
    sessionStorage.setItem("user", "authorized");
    setTimeRefresh();
  };

  const userLogin = async (payload) => {
    try {
      loadingUser.value = true;
      // Simulación de llamada a API
      // const { data } = await axios.post('/login', payload)
      // await setCurrentUserData(data)
      const data = {
        usuario: "admin",
        rol: "admin",
        accessToken: new Date().getTime(),
        expiresInMinutes: 15,
      };
      // El refresh token, se obtiene mediante una cookie
      // este token se usa para renovar el token JWT, y se debe renovar cada cierto tiempo para revalidar la sesión del usuario
      await setCurrentUserData(data);
      router.push({ name: "home" });
    } catch (error) {
      console.error(error);
    } finally {
      loadingUser.value = false;
    }
  };

  const setTimeRefresh = () => {
    //! Buscar una mejor forma de hacer esto, para omitir el uso de setTimeout
    // Este tiempo debe ser el mismo que el tiempo de expiración del token JWT por ejemplo
    // si el token expira en 15 minutos, entonces el tiempo de refresh debe ser antes de que expire el token
    // por ejemplo, 14 minutos y 59 segundos, para que el refresh se ejecute justo antes de que expire el token
    // para esto, se resta 1 minuto al tiempo de expiración del token, y se convierte a milisegundos
    // expiresTokenIn.value * 60 * 1000 = 15 minutos en milisegundos - 6000 = 14 minutos y 59 segundos en milisegundos
    // El refresh token proporcionado por el backend debe ser mayor al tiempo de expiración del token JWT
    console.log({
      TimeRefreshMiliseconds: expiresTokenIn.value * 60 * 1000 - 6000,
    });
    setTimeout(() => {
      console.log("Se solicita automático refresh");
      refreshToken();
    }, expiresTokenIn.value * 60 * 1000 - 6000);
  };

  // el refresh token se obtiene mediante una cookie
  // este token se usa para renovar el token JWT, y se debe renovar cada cierto tiempo para revalidar la sesión del usuario
  //!! el refresh Token debe ser proporcionado por el backend
  // Este metodo se ejecuta de forma automática, cuando el token JWT está a punto de expirar
  // Sin embargo, se puede ejecutar manualmente, por ejemplo, cuando el usuario presiona un botón de refrescar, motivo por el cual lo mandamos a llamar en el router
  const refreshToken = async () => {
    try {
      console.log("onRefresh ⚡");
      // Simulación de llamada a API
      // const { data } = await axios.post('/refresh')  {
      // withCredentials: true,
      // }); // se envía el refresh token, al ser una cookie, no es necesario enviarlo, ya que el backend lo obtiene
      // se realiza la petición de refresh mediante withCredentials: true, para que el backend pueda obtener el refresh token leyendo las cookies
      // ¿por que no lo envió en el body? por que el refresh token se coloca en un a cookie httpOnly, para que no pueda ser leido por javascript, aqui es donde entra withCredentials: true
      // y es por ello que el refreshToken añade un poco mas de seguridad.
      const data = {
        usuario: "admin",
        rol: "admin",
        accessToken: new Date().getTime(),
        expiresInMinutes: 15,
      };
      setCurrentUserData(data);
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem("user");
    }
  };

  const logoutUser = () => {
    userData.value = null;
    userToken.value = undefined;
    sessionStorage.removeItem("user");
    router.push({ name: "login" });
  };

  return {
    userData,
    userToken,
    loadingUser,
    userLogin,
    logoutUser,
    refreshToken,
  };
});
