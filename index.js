const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

server.use(router);
server.use(cors());

server.listen(PORT, () => {
  console.log('Server is running');
});