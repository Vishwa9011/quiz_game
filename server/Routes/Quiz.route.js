const express=require("express")
const {QuizModel}=require("../Model/Quiz.model")

const QuizRouter=express.Router()
 

QuizRouter.get("/",async(req,res)=>{
    try{
        const data=await quizModel.find()
        res.send(data)
        console.log("All book data")
    }
    catch(err){
        console.log(err) 
        res.send({"err":"Something went wrong"})  
    }
})





QuizRouter.post("/quiz",async(req,res)=>{
    const quizData=req.body
    try{
        await QuizModel.insertMany(quizData)
        
        res.send("quiz has been  added")
    }
    catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"}) 
    }
})

module.exports={QuizRouter}