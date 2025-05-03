const cors = require('cors');

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://your-frontend-domain.com']  // Replace with your actual frontend domain
    : ['http://localhost:3001'], // Assuming frontend runs on 3001
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

module.exports = cors(corsOptions);
