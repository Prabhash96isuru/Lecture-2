const express = require('express');
const app = express();
const PORT=  5000;


app.listen(PORT, function(){
    console.log("Listning on port =  "+PORT);
});

let HeroArray = [
    {
        id: 1,
        name: "Captin America"
    },
    {
        id: 2,
        name: "Iron Man"
    },
    {
        id:3,
        name:"Spider man"
    }
];


app.get('/',(req,res)=>{
    res.send("Avengers");
});
app.get('/api/heros',(req,res)=>{
    let heros = ['Captin America','Iron man','Spider Man']
    res.send(heros);
});


app.get('/api/heros/:heroId',(req,res)=>{
    let heroId =  parseInt  (req.params.heroId);
    let hero = HeroArray.find(h => h.id === heroId);    
    res.send(heros); 
});
