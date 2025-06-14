export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"], // Allow your frontend URL here
      headers: [
        "Content-Type",
        "Authorization",
        "x-api-secret", // ✅ allow your custom header
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          "worker-src": ["'self'", "blob:", "data:"],
          "object-src": ["'none'"],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "strapi::security",
  {
    name: "global::verify-shared-secret",
    config: {},
  },
];
