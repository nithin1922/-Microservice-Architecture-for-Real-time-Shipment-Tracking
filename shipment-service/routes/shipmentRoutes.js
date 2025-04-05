const express = require('express');
const router = express.Router();
const { producer } = require('../kafkaProducer');

router.post('/update', async (req, res) => {
  const { shipmentId, location, timestamp } = req.body;

  if (!shipmentId || !location || !timestamp) {
    return res.status(400).json({ error: 'Missing required fields: shipmentId, location, timestamp' });
  }

  const event = { shipmentId, location, timestamp };

  try {
    await producer.send({
      topic: 'shipment_events',
      messages: [{ value: JSON.stringify(event) }]
    });
    console.log('Shipment event sent:', event);
    res.status(200).json({ message: 'Shipment event sent successfully.' });
  } catch (error) {
    console.error('Error sending Kafka message:', error);
    res.status(500).json({ error: 'Failed to send event' });
  }
});

module.exports = router;
