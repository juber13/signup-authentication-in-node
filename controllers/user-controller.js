const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = async(req , res) => {
    try{
        const  {name  , email , password} = req.body;
        
        // checking is user already exites
        let existingUser;
        try{
            existingUser = await User.findOne({email});
        }catch(error){
            console.log(error.message);
        }

        if(existingUser){
            return res.status(400).json({message : "user already exites"});
        }

        //hasing the password

        const hashPassword = await bcrypt.hash(password , 10);
        // creating a new user
        const user = new User({name , email , password : hashPassword.toString()});
        await user.save();
        return res.status(201).json({message : user})
    }catch(error){
        console.log(error.message)
    }
}

