console.log("1: BEFORE CALLING DB...");

function getMovieData(){
return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('****** READING MOVIES FROM DB *******');
       let dbData = {id: 30, name:'Avengers End Game'};
       resolve(dbData.name);
        }, 4000);

    });
}



/*using resolve promise

getMovieData().then((result) => {
    let movieDataDb = result;
    console.log('3: MOIVE DATA :'+ movieDataDb);

});
*/

console.log('4: DOING SOME OTHER WORKS.....');
