function crosPermission(){
    this.permission=function(req,res,next){
      res.header('Access-Control-Allow-Origin','*');
      res.header('Access-Control-Allow-Headers','Content-Type');
      res.header('Access-Control-Allow-Methods','GET','POST','PUT','DELETE','OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
      next();
    }
  }
  
  module.exports= new crosPermission();