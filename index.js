const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = process.env.POT || 5000;


//saagor16
//C6K2KmONj5pbGdd5



async function main() {
  await mongoose.connect('mongodb+srv://saagor16:C6K2KmONj5pbGdd5@veggify-recipe-react.kmwam.mongodb.net/veggify-recipe-react?retryWrites=true&w=majority&appName=veggify-recipe-react');

  app.get('/', (req, res) => {
    res.send('Veggify Recipe app server is running')
  })
}

main().then(()=>console.log('mongodb connected successfully')).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})