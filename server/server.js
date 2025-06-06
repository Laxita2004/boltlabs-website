const express = require("express");
const cors = require("cors");
const domainRoutes = require('./routes/domainRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/domains',domainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
