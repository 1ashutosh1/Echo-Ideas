import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const test = (req, res) => {
  res.json({ message: "API is working!" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }

  const { username, email, password } = req.body;
  if (password) {
    if (password.length < 6) {
      return next(
        errorHandler(400, "Password must be at least 6 characters long")
      );
    }
    password = bcryptjs.hashSync(password, 10);
  }

  if (username) {
    if (username.length < 7 || username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (username !== username.toLowerCase()) {
      return next(errorHandler(400, "Username must be LowerCase"));
    }
    if (!username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers")
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async(req,res,next) => {
   if(req.user.id !== req.params.userId){
     return next(errorHandler(403, 'You are not allowed to delete this account'));
   }

   try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User has been deleted');
   } catch (error) {
    next(error);
   }
}