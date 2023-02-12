import authRouter from "../auth/router";
import privateRouter from "../private-module/router"; 

export const routes = [
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/",
    // beforeEnter: [ requiereAuthGuard  ],
    ...privateRouter,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];
