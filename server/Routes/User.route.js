const express = require("express")
const { userModel } = require("../Model/User.model")

const UserRouter = express.Router()


UserRouter.get("/", async (req, res) => {
    try {
        const data = await userModel.find()
        res.send(data)
        console.log("ALL USER DATA")
    }
    catch (err) {
        console.log(err)
        res.send({ "err": "Something went wrong" })
    }
})





UserRouter.post("/add", async (req, res) => {
    const userData = req.body
    try {
        let data = new userModel(userData)
        await data.save()
        res.send(data)
    }
    catch (err) {
        console.log(err)
        res.send({ "err": "Something went wrong" })
    }
})

module.exports = { UserRouter }