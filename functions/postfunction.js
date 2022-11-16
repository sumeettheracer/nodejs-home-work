const users = require('../model/user.model')
function postFunction(req,res){
    console.log("post is initiated");
    console.log(req.body)
    const {name,username,email} = req.body;
    console.log(users);
    users.findOne({$or:[{userName:`${username}`},{email:`${email}`}]},function(err,found){
        if(found){
            res.status(409).json({message:"Failed to create new user",reason:"Already Exists in DB"})
        }else{
            const person = new users({
                fullName:`${name}`,
                userName:`${username}`,
                email:`${email}`
            })
            person.save(function(err){
                if(err){
                    res.status(409).json({message:err.errors})
                }else{
                    res.status(200).json({message:"the user's data was saved in DB"});
                }
                if(err){
                    res.status(500);
                }
            })
            
        }
    })
}
module.exports = postFunction;
