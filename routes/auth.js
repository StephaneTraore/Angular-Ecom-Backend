const express = require("express");
const { registerUser, loginUser } = require("../handlers/auth-handle");
const router = express.Router();

router.post("/register", async(req,res)=>{
    let model = req.body;
    if(model.name && model.email && model.password){
        //register
        await registerUser(model);
        res.send({
            message:"Utilisateur créer avec success",
        })
    }
    else{
        res.status(400).json({
            error:"Veuillez saisir un nom, email et mot de passe"
        });
    }
});


router.post("/login", async(req,res)=>{
    let model = req.body;
    if( model.email && model.password){
        //login
       const result =  await loginUser(model);

       if(result){
        res.send(result);
       }
       else{
        res.status(400).json({
            error:"Email ou mot de passe incorrect!!"
        });
       }

    }
    else{
        res.status(400).json({
            error:"Veuillez saisir un email ou un mot de passe valid!!"
        });
    }
})


module.exports = router;