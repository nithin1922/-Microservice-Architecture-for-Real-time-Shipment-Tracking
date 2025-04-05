const { startConsumer } = require('./kafkaConsumer');
const redisClient = require('./redisClient');

function handleShipmentEvent(event) {
  const { shipmentId, location, timestamp } = event;
  console.log(`Received event for shipment ${shipmentId}: location ${location}, timestamp ${timestamp}`);
  
  // Cache the shipment data in Redis with a TTL of 600 seconds (10 minutes)
  redisClient.setEx(`shipment:${shipmentId}`, 600, JSON.stringify({ location, timestamp }), (err) => {
    if (err) {
      console.error(`Error caching shipment ${shipmentId}:`, err);
    } else {
      console.log(`Cached shipment ${shipmentId} in Redis.`);
    }
  });
}

startConsumer(handleShipmentEvent)
  .catch(error => console.error('Error starting Kafka consumer:', error));
