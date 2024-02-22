const mongoose = require("mongoose");
const bcrypt=require('bcrypt')

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  conpassword: String,
});


adminSchema.pre('save', async function(next){
  const salt= await bcrypt.genSalt(10)
  const hashPassword=await bcrypt.hash(this.password, salt)
  this.password=hashPassword;
  const hashconpassword=await bcrypt.hash(this.conpassword,salt)
  this.conpassword=hashconpassword
  next()
})

const adminReg = mongoose.model("admins", adminSchema);
module.exports = adminReg;
