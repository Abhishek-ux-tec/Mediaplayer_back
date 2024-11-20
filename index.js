// import json-server

const jsonServer=require('json-server')

// create a server for mediaplayer application

const MPserver=jsonServer.create()

// create middleware 

const middleware=jsonServer.defaults()

// set up routs for json file in server

const route=jsonServer.router('db.json')

// setting port for running server application

const PORT=3000||process.env.PORT

MPserver.use(middleware)
MPserver.use(route)
MPserver.listen(PORT,()=>{
    console.log(`mediaplayer server is running at PORT ${PORT} a,d waiting for client request `);
    
})

