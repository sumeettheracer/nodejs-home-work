const user = require('../model/user.model');
function getuser(req,res){
    let { username } = req.params;
    user.findOne({ userName: username }, function(err,user){
        if(user){
            console.log(user);
            res.status(200).json({message:"found user"});
        }else{
            res.status(404).json({message:"User not found!", username })
        }
        if(err){
            res.status(500);
        }
    })

}
module.exports=getuser;