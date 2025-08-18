const Booking = require('../model/Booking')
const Course = require('../model/course')

class BookingController{
    static createBooking = async(req,res)=>{
        try{
            const{courseId}=req.params;
            // console.log(courseId)
            const userID= req.user._id; //asssume JWT middleware sets req.user
            console.log(userID)
            const course=await Course.findById(courseId);
            if(!course){
                return res.status(404).json({message:"Course not found"});
            }
            const newbooking=await Booking.create({
                course:course._id,
                user:userID,
                price:course.price,
            });
            return res.status(201).json({
                message:"Booking Created succesfully",
                booking:newbooking,
            });
        }
        catch(error){
            console.log(error);
            return res.status(500).json({message:"Server error"});
        }
    };
    
    static getUserbookings=async(req,res)=>{
        try{
            const userID=req.user._id;
            const bookings=await Booking.find({user:userID})
            .populate("course","titlt price")
            .sort({createdAt:-1});
            return res.status(200).json({bookings});
        }
        catch(error){
            console.log(error);
            return res.status(500).json({message:"server error"})
        }
    };

    static cancelbookings=async(req,res)=>{
        try{
            const {bookingID}=req.params;
            const booking=await Booking.findByIdAndUpdate(
                bookingID,
                {status:"Cancelled"},
                {new:true}
            );
            if(!booking){
                return res.status(404).json({message:"Booking not found"});
            }
            return res.status(200).json({
                message:"Booking cancelled successfuly",
                booking,
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:"Server error"})
        }
    };
    static getAllbookings=async(req,res)=>{
        try{
            const bookings=await Booking.find()
            .populate("user","name email")
            .populate("course","title price")
            .sort({createdAt:-1});
            const formatted = bookings.map(b=>({
                _id:b._id,
                UserName:b.user.name,
                Useremail:b.user.email,
                courseTitle:b.course.title,
                price:b.course.price,
                status:b.status,
                CreatedAt:b.createdAt,
            }));
            res.status(200).json(formatted);
        }
        catch(error){
            console.error(error);
            return res.status(500).json({message:"Server error"});
        }
    };
}

module.exports=BookingController