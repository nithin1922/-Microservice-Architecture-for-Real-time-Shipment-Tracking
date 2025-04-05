// tracking-service/kafkaConsumer.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'tracking-service',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] // Use environment variable if available.
});

const consumer = kafka.consumer({ groupId: 'tracking-group' });

async function startConsumer(onMessage) {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'shipment_events', fromBeginning: true });
    console.log('Kafka Consumer connected and subscribed to shipment_events.');

    await consumer.run({
      eachMessage: async ({ message }) => {
        try {
          const event = JSON.parse(message.value.toString());
          onMessage(event);
        } catch (error) {
          console.error('Error processing message:', error);
        }
      },
    });
  } catch (error) {
    console.error('Error in Kafka consumer:', error);
  }
}

module.exports = { startConsumer };
