const routes = [
  {
    name: "HomePage",
    path: "/", 
    component: () => import("@/views/TeamList"), 
  },
];

export default routes;
