import PublicLayout from "../../layout/PublicLayout.vue";

export default {
  name: "auth",
  component: PublicLayout,
  redirect: "/auth/login",
  children: [
    {
      path: "login",
      name: "login",
      meta: { requiresAuth: false },
      component: () =>
        import(/* webpackChunkName: "login" */ "../pages/LoginPage.vue"),
    },
  ],
};
