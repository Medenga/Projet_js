const { Router } = require("express");
const User = require("../models/User");
const router = require("./user");

//creer un compte
router.post("/créer un compte", async(req,res)=>{
    try{
        const inscription= new User({
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password,
        }
    }catch(err){
        res.status(500).json(err);
    }
})
//connexion