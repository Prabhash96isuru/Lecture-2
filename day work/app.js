const express = require('express');
const heroes = require('./Routes/Heros');
const home =  require('./Routes/home');
const authenticator =  require('./MiddleWare/Authenticator');
const emailer =  require('./MiddleWare/emialJob');
const app = express();
const PORT=  5000;

app.use(express.json());

app.use(authenticator); 

app.use(emailer); 

app.use('/',home);

app.use('/api/heros',heroes);

app.listen(PORT, function(){
    console.log("Listning on port =  "+PORT);
});
