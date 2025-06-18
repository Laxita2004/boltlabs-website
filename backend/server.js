import express from 'express';
import loader from './loader/index.js';

const app = express();

await loader(app); // 🚀 Run loaders (middlewares, routes, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
