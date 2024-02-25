const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
userSchema = mongoose.Schema({

  username:{
    type:String,
    required:true,
  unique:true,
  trim:true
},
email:{
    type:String,
    required:true,
    validator(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid email id")
        }
    }
    },
    phone:{
        type:String,
        required:true,
   
    },
    password: {
 type:String,
 required:true,
      },
      isAdmin:{
        type:Boolean,
        default:false,
      },
      tokens: [{
        token: {
          type: String,
          required: true,
        },
      }],

})
// bycrypt
userSchema.pre("save", async function(next) {
  try {
    if (this.isModified("password")) {
      console.log(`the current password is without bycrpt ${this.password}`);
      this.password = await bcrypt.hash(this.password, 10);
      console.log(`the current password is ${this.password}`);
    }
    next();
  } catch (error) {
    console.error('Error during password hashing:', error);
    next(error);
  }
});
// json web token
// userSchema.methods.generateToken = async function() {
//   try {
//     // const user = this;
//     // const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY);
    
//     // user.tokens = user.tokens.concat({ token });
//     // await user.save();

//     // return token; 
//     return jwt.sign({
//       userid:this._id.toString(),
//       email:this.email,
//       isAdmin:this.isAdmin,
//     },process.env.SECRET_KEY
//     );
//   } catch (error) {
//     console.error('Token generation failed:', error);
//     throw new Error('Token generation failed');
//   }
// };
userSchema.methods.generateToken = async function() {
  try {
    const token = jwt.sign({
      userid: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    }, process.env.SECRET_KEY);

    this.tokens = this.tokens.concat({ token });
    await this.save();

    return token;
  } catch (error) {
    console.error('Token generation failed:', error);
    throw new Error('Token generation failed');
  }
};

// we need collections
const UserRegister = mongoose.model("UserRegister",userSchema)

module.exports = UserRegister; 