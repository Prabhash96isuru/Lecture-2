const express = require('express');
const heroes = require('./Routes/Heros');
const home =  require('./Routes/home');
const authenticator =  require('./MiddleWare/Authenticator');
const emailer =  require('./MiddleWare/emialJob');
const  Mongoose = require('mongoose');
const app = express();
const PORT=  5000;

app.use(express.json());

app.use(authenticator); 

app.use(emailer); 

app.use('/',home);

app.use('/api/heros',heroes);

Mongoose.connect("mongodb://localhost/herodb", { useNewUrlParser: true})

.then(()=> {console.log("Connected to DB Successfully...........")
})
.catch(err => console.log("Error has been occured while connecting to DB : ", err));



app.listen(PORT, function(){
    console.log("Listning on port =  "+PORT);
});
