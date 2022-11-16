//importing the model form model file.

const user = require("../model/user.model");
//defineing the function here.
function getall(req,res){
    const {x_api_key} = req.headers
    if(x_api_key == 'Abracadabra'){
        user.find({}, function(err,found){
            if(found){
                // console.log(found);
                res.status(200).json(found)
            }
            if(err){
                res.status(500)
            }
        })
    }else{
        res.status(401).json({
            error: true,
            data: 'API Key not found'
        })
    }
}


module.exports = getall;