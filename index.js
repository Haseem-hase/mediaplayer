// 1 import json server
const jsonServer = require('json-server')

// 2 create server application using json server
const mediaAppServer = jsonServer.create()

// 3 create a middleware used by jsonserver
const middleware = jsonServer.defaults()

// 4 craete router : set up router for db.json file
const router = jsonServer.router('db.json')   

// 5 applying middleware to the server
mediaAppServer.use(middleware)

// 6 applying router to the server
mediaAppServer.use(router)

// 7 define port
const PORT = 3000

// 8 starting the server
mediaAppServer.listen(PORT,()=>{
    console.log('Media app Server started on PORT' +PORT);
})
