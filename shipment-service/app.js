const express = require('express');
const app = express();
const { connectProducer } = require('./kafkaProducer');
const shipmentRoutes = require('./routes/shipmentRoutes');

app.use(express.json());

// Basic status endpoint
app.get('/', (req, res) => {
  res.send('Shipment Service is running.');
});

// Use shipment routes
app.use('/shipment', shipmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectProducer();
  console.log(`Shipment Service listening on port ${PORT}`);
});
