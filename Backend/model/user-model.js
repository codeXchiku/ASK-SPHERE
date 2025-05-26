import { model, Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import dotenv from "dotenv"
dotenv.config()

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

//password hashing register using bcrypt
userSchema.pre("save", async function (next) {
    const currentUser = this
    //this check is besically for profile updates
    if (!currentUser.isModified("password")) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(currentUser.password, salt);
        currentUser.password = hashPassword
    } catch (error) {
        next(error)
    }

})

//login password campare using bcrypt

userSchema.methods.isPasswordValid = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//jwt
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                email: this.email,
                userId: this._id.toString(),
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: '1d'
            }
        );
    } catch (error) {
        console.error("Token generation error:", error);
        return null;
    }
}




const User = model("User", userSchema)

export default User