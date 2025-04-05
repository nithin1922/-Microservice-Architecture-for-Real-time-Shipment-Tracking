// shipment-service/kafkaProducer.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'shipment-service',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] // Use environment variable if available.
});

const producer = kafka.producer();

async function connectProducer() {
  try {
    await producer.connect();
    console.log('Kafka Producer connected.');
  } catch (error) {
    console.error('Error connecting Kafka Producer:', error);
  }
}

module.exports = { producer, connectProducer };
