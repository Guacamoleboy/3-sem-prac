import app from './app.js';
import env from './config/env.js';
import { loadProductsToCache } from './services/productService.js';

async function startServer() {
  try {

    await loadProductsToCache();
    
    app.listen(env.port, () => {
      console.log(`Server running on http://localhost:${env.port}`);
    });

  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1); 
  }
}

startServer();