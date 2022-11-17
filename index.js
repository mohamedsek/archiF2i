
const port = 3000
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const { User } = require("./model/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/:v/:test', (req, res) => {
    console.log(req.params.test)
    console.log(req.params.v)
    console.log(req.headers.test)
   return res.status(200).json({
     error: false,
     message: "Hello world"
   })
 })

 app.post('/user', async(req, res) => {
    console.log(req.body.nom)
    console.log(req.body.prenom)
    console.log(req.body.email)

    const user = new User({
      nom: req.body.nom,
      email: req.body.email,
      prenom: req.body.prenom
    })
    console.log(user)

    await user.save()

    return res.status(200).json({
     error: false,
     message: "Hello world"
   })
 })


const start = async () => {
    try {
      const mongo = await mongoose.connect(
        "mongodb://127.0.0.1:27017/myapp"
      ).catch(error => console.error(err.reason));
      console.log(mongo)
      app.listen(port, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  start();