module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const secret = ctx.request.headers["x-api-secret"];
    console.log(ctx.request.headers);
    if (
      ctx.request.path.startsWith("/api/orders") ||
      ctx.request.path.startsWith("/api/upload")
    ) {
      console.log("🔥 Middleware Hit:", ctx.request.method, ctx.request.url);
      const id = ctx.params?.id || ctx.request.body?.id;
      console.log(id);
      console.log(secret, ctx.request.path);
      if (secret !== "thisniggacrazyyy") {
        return ctx.unauthorized("Unauthorized access");
      }
    }

    await next();
  };
};
