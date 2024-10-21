const conn = require('./db/connection')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express =  require('express')
const app = express();
const  cors = require('cors');
const indexfile = require('./router/index'); 

require('dotenv').config();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/',indexfile)





mongoose.connect(conn.database,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("Succesfull")
  
  }).catch((err) => {
    console.log("Error: ", err)
  })

app.listen(conn.port, (err)=>{
  if(err){
    console.error(err);
  }
  console.log('Connected to port '+ conn.port)
});

