let p = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve('Successs');
      // reject('Something went wrong');
    },3000);
});

p.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log('!!!ERROR!!! : '+ error);
})