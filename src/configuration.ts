export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  cors: {
    allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  },
  security: {
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
    },
  },
});
