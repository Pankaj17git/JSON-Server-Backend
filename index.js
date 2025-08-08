const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'user.json'));
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);

// Custom route example (optional)
// server.get('/hello', (req, res) => {
//   res.json({ message: 'Hello from custom route!' });
// });

// Use default router
server.use(router);

// Start the server
const PORT = process.env.PORT || 4001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
