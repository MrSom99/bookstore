const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

////////////////admin model/////////
const adminReg=require('../mongo/adminModel')

////////////////register Admin////////////
router.post('/', async (req,res)=>{
    const{name, email, password, conpassword}= req.body
    const regisbook= await new adminReg({name, email, password, conpassword})
    const result= await regisbook.save()
    res.send({message:"Admin registered successfully", admindata:result})
})

//////////////admin login///////////
router.post('/login',async (req,res)=>{
    const {email, password}=req.body
    if(email && password){
        const findId= await adminReg.findOne({email})
        if(findId !==null){
            const matchpass= bcrypt.compare(password, findId.password)
            if(email && matchpass){
                let token=await jwt.sign({findId},"sectret")
                res.send({message:"login Successful", adminData:findId, token})
            }
            else{
                res.send({message:"invalid credentials"})
            }
        }
        else{
            res.send({message:"Id not found"})
        }
    }
    else{
        res.send({message:"plzz fill the fields"})
    }
})

module.exports=router