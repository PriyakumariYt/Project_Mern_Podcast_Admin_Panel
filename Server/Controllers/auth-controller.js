
const UserRegister = require("../Models/auth-models")
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try {
        res.status(200).send('home page');
    } catch (error) {
        console.log(error);
    }
};

/*..........................
............................
RESIGSTRATION LOGIC
......................................
........................*/
const register = async (req, res) => {
  try {
    console.log(req.body)
    const {username,email,password,phone} = req.body
 const userExist = await UserRegister.findOne({email});
 if(userExist){
  return res.status(400).json({msg:"email already exist"})
 }
 const userCreated = await UserRegister.create({
  username,
  email,
  password,
  phone
})
     res.status(201).json({
      message:"register successfull",
      token:await userCreated.generateToken(),
      userid:userCreated._id.toString(),
     });
  } catch (error) {
   res.status(500).json("internal error")
  }
};
/*..........................
............................
LOGIN LOGIC
......................................
........................*/
const login = async (req, res) => {
    try {
      const {email,password} = req.body;
      
      const userExist = await UserRegister.findOne({email})
      console.log(userExist)
      if(!userExist){
        return res.status(400).json({msg:"Invalid User"});
      }
      // compare the password
const userpassword = await bcrypt.compare(password,userExist.password)
if(userpassword){
  const token = await userExist.generateToken();
  res.status(200).json({
    // message:"login successfull",
    // token:await userExist.generateToken(),
    // userid:userExist._id.toString(),
    message: "Login successful",
    token: token,
    userid: userExist._id.toString(),
   });
}
else{
  res.status(401).json({msg:"invalid email and password"})
}
     
    } catch (error) {
      res.status(500).json("internal error")
    }
  };
/*..........................
............................
USER DATA SEND LOGIC IN FRONTEND
......................................
........................*/
  const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };
 
  

module.exports = { home, register,login,user };
