const express = require('express');
const router = express.Router();


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


router.get('/',(req,res)=>{
    res.send(HeroArray);
});


router.get('/:heroId',(req,res)=>{
    let heroId =  parseInt  (req.params.heroId);
    let hero = HeroArray.find(h => h.id === heroId);    
    
        if(!hero){
            res.status(404).send("The Given ID does not exsist")
        }
    res.send(hero); 
});
 
router.post('/',(req,res)=>{

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

router.put('/:heroId',(req,res)=>{
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

router.delete('/:heroId',(req,res)=>{
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

module.exports= router;