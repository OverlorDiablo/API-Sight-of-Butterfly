const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(cors({
  origin: true,
  credentials: true,
  preflightContinue: false,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

server.options('*', cors());

server.listen(PORT, () => {
  console.log('Server is running');
});