const express=require('express');

const app=express();


const control=require('./controllers/recipecontroller');
const routes = require('./routes/recipeRoutes');


app.use('/api',routes);





const PORT=process.env.PORT|| 3000


app.listen(PORT,()=>{
    console.log("Listening to the prort ",PORT);
})