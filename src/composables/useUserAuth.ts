import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUserStore";

// Este composable nos ayuda a no tener fuerte acoplamiento con el store en los componentes
export const useUserAuth = () => {
  const userStore = useUserStore();
  const { userData, loadingUser } = storeToRefs(userStore);

  const singInUser = async (payload) => {
    const response = await userStore.userLogin(payload);
    return response;
  };

  const logoutUser = () => {
    userStore.logoutUser();
  };

  // Pretendo crear algún getter para validar si el usuario esta logueado o no
  // el problema es que no se como hacerlo, ya que al refrescar la pagina se pierde el estado del store,
  // y por el momento quiero evitar usar el uso de un plugin para persistir el estado del store en el localstorage

  return {
    userData,
    loadingUser,
    singInUser,
    logoutUser,
  };
};
