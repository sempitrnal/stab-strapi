export default {
  routes: [
    {
      method: "GET",
      path: "/products/:id",
      handler: "product.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
