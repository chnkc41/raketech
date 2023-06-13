const routes = [
  {
    name: "HomePage",
    path: "/",
    // component: HomePage
    component: () => import("@/views/TeamList"), 
  },
];

export default routes;
