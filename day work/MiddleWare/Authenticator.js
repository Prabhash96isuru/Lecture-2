log = (req,res,next)=>{
  
    console.log('Authenticate User');
    next();
}
    module.exports = log;