const UserRegister = require("../Models/auth-models")
const Contact = require("../Models/contact-model")

/*..........................
............................
BACKEND DATA LOGIC GET ALL USER DATA IN DATABASE.
......................................
........................*/
const getAlluser = async (req, res ) =>{
try {
    const users = await UserRegister.find({},{password:0})
    console.log(users)
    if(!users ||users.length ===0){
return res.status(404).json({msg:"No User Found"})
}
return res.status(200).json({users})
} catch (error) {
    next(error)
}
}
/*..........................
............................
GET USER DELETE DATA 
......................................
........................*/

const deleteUserById = async(req,res)=>{
try {
    const id = req.params.id;
await UserRegister.deleteOne({_id:id});
return res.status(200).json({msg: "USER DELETED BY ADMIN"})
} catch (error) {
    next(error)
}
}


/*..........................
............................
//GET USER SINGLE DATA LOGIC
......................................
........................*/


const getUserById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await UserRegister.findOne({ _id: id }, { password: 0 });
      return res.status(200).json({ msg:"user single data", data });
    } catch (error) {
      next(error);
    }
  };
/*..........................
............................
UPDATE USER BY ID
......................................
........................*/
const updateUserById = async(req,res) =>{
try {
    const id = req.params.id;
    const updatedata = req.body;
    const updatedUser = await UserRegister.updateOne(
        {_id:id},
        {
        $set:updatedata,
         }
         )
return res.status(200).json({msg:"user update successfull", updatedUser})

} catch (error) {
   next(error) 
}
}
/*..........................
............................
CONTACT ADMIN LOGIC
......................................
........................*/

const getAllcontact= async(req,res)=>{

    try {
        const contacts = await Contact.find()
    console.log(contacts)
    if(!contacts ||contacts.length ===0){
        return res.status(404).json({msg:"No UserContact Found"})
        }
        return res.status(200).json({contacts})
        }

     catch (error) {
        next(error)
    }
  
    }



  /*..........................
............................
CONTACT DELETE LOGIC
......................................
........................*/
    const deleteByIdContact =async (req,res)=>{
        try {
            const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({msg: "CONTACT DELETED BY ADMIN"})
        } catch (error) {
            next(error)
        }
    }
    
module.exports = {getAlluser,getAllcontact,deleteUserById,getUserById,updateUserById,deleteByIdContact};
