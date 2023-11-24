const express = require('express')
const morgan = require('morgan')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const { Cors } = require('./middlewares/cors')

app.use(Cors);

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/v1/orders', require('./routes/order.routes'))
app.use('/api/v1/clients', require('./routes/client.routes'))
app.use('/api/v1/products', require('./routes/product.routes'))
app.use('/api/v1/buy', require('./routes/buy.routes'))
app.use('/api/v1/categories', require('./routes/category.routes'))
app.use('/api/v1/users', require('./routes/user.routes'))
app.use('/api/v1/roles', require('./routes/role.routes'))
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/docs-swagger', require('./routes/api-docs'))

//Swagger
const swaggerOptions = {
     swaggerDefinition: {
          info: {
            version: '1.0.0',
               title: 'Documentation API',
               description: 'Customer API Information',
               contact: {
                    name: 'Julio Garcia'
               },
               servers: ['http://localhost:3000']
          }
     },
     basePath: "/",
     //Apis a documentar
    apis: ['routes/category.routes.js', 'routes/client.routes.js', 'routes/order.routes.js', 'routes/product.routes.js', 'routes/user.routes.js', 'routes/role.routes.js', 'routes/auth.routes.js', 'routes/buy.routes.js' ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.get('/', (req,res)=>{
  res.json({msg: 'Welcome to my API'})
})








module.exports=app