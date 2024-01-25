const jsonserver=require('json-server')

const cors=require('cors')


const server=jsonserver.create()

 
const middleware = jsonserver.defaults()


const router=jsonserver.router('db.json')



server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log(`___json Serever Started At Port : ${PORT}___`);
})