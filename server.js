const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const advertisementRoutes = require('./routes/advertisementRoutes');
const bodyParser = require('body-parser');

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/advertisements', advertisementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
