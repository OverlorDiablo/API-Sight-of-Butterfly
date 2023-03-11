const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');

const PORT = process.env.PORT || 5000;

server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});