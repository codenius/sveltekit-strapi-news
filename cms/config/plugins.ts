export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        jwtSecret: env("STRAPI_JWT_SECRET")
      },
    },
  },
  plugins: { ckeditor: { enabled: true } },
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase-v4",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
