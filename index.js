const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const port = process.env.POT || 5000;


//saagor16
//C6K2KmONj5pbGdd5

app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect('mongodb+srv://saagor16:C6K2KmONj5pbGdd5@veggify-recipe-react.kmwam.mongodb.net/veggify-recipe-react?retryWrites=true&w=majority&appName=veggify-recipe-react');

  app.get('/', (req, res) => {
    res.send('Veggify Recipe app server is running')
  })
}

main().then(()=>console.log('mongodb connected successfully')).catch(err => console.log(err));

//routes
const ItemRoutes =require("./src/routes/itemRoute");
app.use('/api',ItemRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})