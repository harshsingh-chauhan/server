const CourseModel = require('../model/course')
const cloudinary = require('cloudinary')

cloudinary.config({ 
        cloud_name: 'dcsggpkpm', 
        api_key: '586794416452368', 
        api_secret: 'EXiW5RE9qKl8dDB7riDR4P3_Eqk' // Click 'View API Keys' above to copy your API secret
    });


class CourseController{
    static display=async(req,res)=>{
        try{
            const data = await CourseModel.find()
            res.json(data)
        }
        catch (error){
            console.log(error)
        }   
    }
    static create=async(req,res)=>{
        try{
            // console.log(req.files)
            const file = req.files.image
            // console.log(File)
            const imageUpload = await cloudinary.uploader.upload(file.tempFilePath,{
                folder:'PnIfosys'
            })
            console.log(imageUpload)
            const {title,descrption,price,duration}=req.body
            const data = await CourseModel.create({
                title,
                descrption,
                price,
                duration,
                image:{
                    public_id:imageUpload.public_id,
                    url:imageUpload.secure_url
                }
            })
            res.json(data)
        }
        catch (error){
            console.log(error)
        }   
    }
    static view = async (req, res) => {
        try {
            const id = req.params.id
            const data = await CourseModel.findById(id)
            res.json(data)
        } catch (error) {
            console.log(error);
        }
    }
    static update = async (req, res) => {
        try {
            const id = req.params.id
            // console.log(id)
            const {title,descrption,price,duration}=req.body
            const data = await CourseModel.findByIdAndUpdate(id,{title,descrption,price,duration})
            res.json(data)
        } catch (error) {
            console.log(error);
        }
    }
    static delete = async (req, res) => {
        try {
            const id = req.params.id
            // console.log(id)
            const data = await CourseModel.findByIdAndDelete(id)
            res.json({
                mag:"delete succesfully"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=CourseController