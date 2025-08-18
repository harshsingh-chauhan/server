// const contactModel = require('../model/contact')
const TeacherModel = require('../model/teacher')

class TeacherController{
    static display=async(req,res)=>{
        try{
            res.send("hello display")
        }
        catch (error){
            console.log(error)
        }   
    }
    static create=async(req,res)=>{
        try{
            // console.log(req.body)
        
            const {name,email,password}=req.body
            
            const data = await TeacherModel.create({name,email,password})
            res.json(data)
        }
        catch (error){
            console.log(error)
        }   
    }
    
}

module.exports=TeacherController