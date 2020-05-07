const path=require('path');

const fs=require('fs');
 const express=require('express');
 const app=express();
 const bodyParser=require('body-parser');
const refRoutes=require('./routes/referral');
 const mongoose=require('mongoose');
 const helmet=require('helmet');
const compression=require('compression');
const morgan=require('morgan');


const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

app.use(helmet());
app.use(compression());
app.use(morgan('combined',{stream:accessLogStream}));


 app.use(bodyParser.json()); // application/json

 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.use(refRoutes);

  mongoose.connect('mongodb+srv://uditsingh294:5511@taskapi-9jegf.mongodb.net/test?retryWrites=true&w=majority')
.then(result => {
     app.listen(process.env.PORT||3000);
   })
   .catch(err => console.log(err));