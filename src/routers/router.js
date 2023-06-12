const routes = [
  {
    name: "HomePage",
    path: "/",
    // component: HomePage
    component: () => import("@/views/HomePage"),
  },
];

export default routes;
