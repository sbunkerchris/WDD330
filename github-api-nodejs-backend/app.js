const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const app = express();
const PORT=8080;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Welcome to the games API! Take a breath and start using it!')
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))

app.use(middlewares.setHeaders);

const routes = require('./routes');
app.use('/github_api', routes);