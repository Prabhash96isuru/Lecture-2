const express = require('express');
const authenticator =  require('./MiddleWare/Authenticator');
const emailer =  require('./MiddleWare/emialJob');
const app = express();
const PORT=  5000;

app.use(express.json());

app.use(authenticator); 

app.use(emailer); 

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
    res.send(HeroArray);
});


app.get('/api/heros/:heroId',(req,res)=>{
    let heroId =  parseInt  (req.params.heroId);
    let hero = HeroArray.find(h => h.id === heroId);    
    
        if(!hero){
            res.status(404).send("The Given ID does not exsist")
        }
    res.send(hero); 
});
 
app.post('/api/heros',(req,res)=>{

    if(!req.body.heroName){
      return  res.status(400).send("Make sure to enter all the details ");
    }

    let newObj = {
        id: HeroArray.length + 1,
        name: req.body.heroName
    };
    HeroArray.push(newObj);
    console.log(HeroArray);
    res.send(newObj); 
}); 

app.put('/api/heros/:heroId',(req,res)=>{
    let heroId =  parseInt  (req.params.heroId);
    let hero = HeroArray.find(h => h.id === heroId);     
    
        if(!hero){
            return res.status(404).send("The Given ID does not exsist")
        }
        if(!req.body.heroName){
            return res.status(400).send("Make sure to enter all the details") 
        }
        
        hero.name =  req.body.heroName;
        
         console.log(HeroArray)

        res.send(hero); 
});

app.delete('/api/heros/:heroId',(req,res)=>{
    let heroId =  parseInt  (req.params.heroId);
    let hero = HeroArray.find(h => h.id === heroId);     
    
            if(!hero){
                return res.status(404).send("The Given ID does not exsist")
            }
        let IndexofHero  = HeroArray.indexOf(hero);

        HeroArray.splice(IndexofHero,1);
        
        hero.name =  req.body.heroName;
        
        // console.log(HeroArray)

        res.send(hero); 
});

app.listen(PORT, function(){
    console.log("Listning on port =  "+PORT);
});
