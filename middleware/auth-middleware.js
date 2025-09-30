const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).send({
            error:"Accès refusé"
        });
    }
    try{
        const decode = jwt.verify(token,"seceret");
        console.log(decode);
        req.user=decode;
        next();
    }catch(err){
        return res.status(401).send({
            error:"Token invalid"
        });
    }
}

function isAdmin(req,res,next){
    if(req.user && req.user.isAdmin){
        next();
    }else{
        return res.status(403).send({
            error:"accès interdit"
        });
    }
}

module.exports={verifyToken, isAdmin}