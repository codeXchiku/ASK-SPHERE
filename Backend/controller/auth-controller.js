import User from "../model/user-model.js"

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(401).json({ message: "user already exists" })
        }

        const newUser = await User.create({ username, email, phone, password })

        res.status(201).json({
            message: "registation successfull",
            token: await newUser.generateToken(),
            userId: newUser._id.toString()
        })
    } catch (error) {
        return res.status(500).json("internal server error")
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email: email })
        if (!userExists) {
            return res.status(401).json({ message: "invalid email or password" })
        }
        const isPasswordValid = userExists.isPasswordValid(password)
        if (isPasswordValid) {
            res.status(200).json({
                message: "login successfull",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            })
        } else {
            return res.status(401).json("invalid email or password")
        }
    } catch (error) {
        return res.status(500).json("internal server error")
    }
}

export { register, login }