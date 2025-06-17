import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async customUpdate(ctx) {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      if (!id || !data) {
        return ctx.badRequest("Missing order ID or data");
      }

      const secret = ctx.request.headers["x-api-secret"];
      if (secret !== "thisniggacrazyyy") {
        return ctx.unauthorized("Invalid API secret");
      }

      try {
        const updatedOrder = await strapi.entityService.update(
          "api::order.order",
          id,
          { data }
        );
        return ctx.send(updatedOrder);
      } catch (err) {
        strapi.log.error("Update failed:", err);
        return ctx.internalServerError("Failed to update order");
      }
    },
  })
);
