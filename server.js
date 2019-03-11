import http from 'http';
import app from './server/routes/index';

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);