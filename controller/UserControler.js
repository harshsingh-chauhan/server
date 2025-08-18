const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");    


class UserController {
  static register = async (req, res) => {
    try {
      // console.log(req.body)
      const { name, email, password } = req.body;
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          meassage: "Email already exsit",
        });
      }
      const hashpassword = await bcrypt.hash(password, 10);
      const data = await UserModel.create({
        name,
        email,
        password: hashpassword,
      });
      res.json({
        data,
        msg: "user insert succes",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static login = async (req,res) => {
    try {
    //   console.log(req.body);
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid crerdentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid crerdentials" });
      }
      var token = jwt.sign({ ID: user._id }, 'kuchbi@34');
    //   console.log(token);
      //send token  in http  only cookie
      res.cookie("token",token,{
        httpOnly:true,
      });
      res.status(200).json({
        message: "Login successful",
        role : user.role,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static profile = async(req,res)=>{
    try{
        console.log("hello profile")
    }catch(error){
        console.log(error)
    }
  };
  static logout = async(req,res)=>{
    try{
        res.clearCookie("token")
        res.status(200).json({message:"logout succesfully"})
    }
    catch(error){
        console.log(error)
    }
  };
}

module.exports = UserController;
