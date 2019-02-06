const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
//const pause = require('connect-pause');
//const DELAY_TIME_FOR_ALL_APIS = 2000;

//server.use(pause(DELAY_TIME_FOR_ALL_APIS));

server.use(middlewares)
server.use(router)
server.listen(3002, () => {
  console.log('JSON Server is running')
})