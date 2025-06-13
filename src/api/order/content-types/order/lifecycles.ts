import { randomBytes } from "crypto";

module.exports = {
  async beforeCreate(event) {
    let unique = false;
    let orderId = "";

    while (!unique) {
      const random = randomBytes(3).toString("hex").toUpperCase();
      orderId = `STABCULT-${random}`;
      const existing = await strapi.entityService.findMany("api::order.order", {
        filters: { orderId },
      });
      if (existing.length === 0) unique = true;
    }

    event.params.data.orderId = orderId;
  },
};
