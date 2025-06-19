import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const product = await strapi.entityService.findOne(
        "api::product.product",
        id
      );

      if (!product) return ctx.notFound();

      return ctx.send(product);
    },
  })
);
