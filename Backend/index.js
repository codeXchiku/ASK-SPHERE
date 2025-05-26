import express from "express"
import connectDb from "./utils/db.js"
import authRouter from "./router/auth-router.js"
import cors from "cors"

const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/auth",authRouter)

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
}).catch((error)=>{
    console.log("connection failed",error);
})
