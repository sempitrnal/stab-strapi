export default {
  routes: [
    {
      method: "PUT",
      path: "/custom-orders/:id",
      handler: "order.customUpdate",
      config: {
        auth: false, // or true if using Strapi auth
        policies: [], // can add your own here
      },
    },
  ],
};
