export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "strapi",
          transformation: [
            {
              width: 300,
              height: 300,
              crop: "thumb",
              gravity: "center",
              format: "jpg",
            },
          ],
        },
      },
    },
  },
});
