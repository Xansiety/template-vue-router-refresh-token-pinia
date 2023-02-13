import PrivateLayout from "../../layout/PrivateLayout.vue";

export default {
  component: PrivateLayout,
  redirect: { path: "" },
  children: [
    {
      path: "",
      name: "home",
      meta: { requiresAuth: true },
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "profile",
      name: "profile",
      meta: { requiresAuth: true },
      component: () => import("../pages/ProfilePage.vue"),
    },
  ],
};
