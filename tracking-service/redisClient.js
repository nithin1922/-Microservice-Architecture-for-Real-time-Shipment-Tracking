const redis = require('redis');

// Use an environment variable (REDIS_URL) or fallback to the proper connection string
const redisUrl = process.env.REDIS_URL || 'redis://redis:6379'; 
// Note: 'redis' is the Kubernetes service name for Redis, as defined in your manifest.

const redisClient = redis.createClient({ url: redisUrl });

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect the client asynchronously
(async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis at', redisUrl);
  } catch (error) {
    console.error('Error connecting to Redis:', error);
  }
})();

module.exports = redisClient;
