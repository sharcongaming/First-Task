
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModal from "../Modal/UserModal.js";


export const Register = async (req, res) => {
  try {
    const { userData } = req.body;
    const { name, email, password, number,   confirmpassword} = req.body.userData;
    if (!name || !email || !password || !number  ||   !confirmpassword)
      return res.json({
        success: false,
        message: "All Feilds are Mandatory!",
      });

    const isEmailExist = await UserModal.find({ email: email });
    if (isEmailExist.length) {
      return res.json({
        success: false,
        message: "Email already exists! Try a new one.",
      });
    }

    const hashPassW = await bcrypt.hash(password, 10);

    const user = new UserModal({
      name:name,
      email:email,
      number:number,
      password: hashPassW,
      confirmpassword: confirmpassword,
     
    });

    await user.save();
    return res.json({
      success: true,
      message: "User Registered Successfully!",
      user:user
    });
  } catch (error) {
    return res.json({ success: false, message: error.message});
  }
};


 
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body.userData;
    if (!email || !password)
      return res.json({
        success : false,
        message: "All fields are mandtory..",
      });

    const user = await UserModal.findOne({ email: email });
    if (!user)
      return res.json({ success : false, message: "User not found.." });

    const isPasswordRight = await bcrypt.compare(password, user.password);
    // console.log(isPasswordRight, "isPasswordRight");
    if (isPasswordRight) {
      const userObeject = {
        name: user.name,
        email: user.email,
        _id: user._id,
      };
        // console.log("Before ")
        // console.log(expirytime, "expirytime")
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      // console.log(token, "token her");
      return res.json({
        success : true,
        message: "Login Successfull.",
        user: userObeject,
        token: token,
      });
    }
    return res.json({ success : false, message: "Password is wrong." });
  } catch (error) {
    return res.json({ success : false, message: error.message });
  }
};
export const getCurrentUser = async (req, res) => {
  try {
      const { token } = req.body;
      if (!token) return res.json({ success: false, message: "Token is required!" })

      const decoededData = jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoededData, "decoededData")
      if (!decoededData) {
          return res.json({ success: false, message: "Not valid json token.." })
      }
      // return res.send(decoededData)
      const userId = decoededData?.userId

      const user = await UserModal.findById(userId);

      if (!user) {
          return res.json({ success: false, message: "User not found.." })
      }

      const userObeject = {
          name: user?.name,
          email: user?.email,
          _id: user?._id
      }

      return res.json({ success: true, user: userObeject })

  } catch (error) {
      return res.json({ success: false, message: error })
  }
}

export const getNumber = async (req, res) => {  
  try {
      const { userId } = req.body;
      if (!userId) return res.json({ success: false, message: "User Id is mandtory.." })

      const userNumber = await User.findById(userId).select("number isNumberVerified");
      if (userNumber) {
          return res.json({ success: true, number: userNumber.number, isNumberVerified: userNumber.isNumberVerified })
      }
      return res.json({ success: false, message: "Internal error try again.." })

  } catch (error) {
      return res.json({ success: false, message: error })
  }
}

 
