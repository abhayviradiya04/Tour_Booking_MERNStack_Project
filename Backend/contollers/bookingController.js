    import Booking from '../models/Booking.js'


    //create new booking
    export const createBooking = async(req,res)=>{

    //       const newBooking = new Booking({
    //     fullName: req.body.fullName,
       
    // });
         const newBooking = new Booking(req.body);

        try {
            const savedBooking =await newBooking.save();
            res.status(200).json({
                success:true,
                message:'Your tour is book',
                data:savedBooking
            })       
        } catch (err) {
            console.error(err);
            res.status(500).json({
                success:true,
                message:'internel server error',
                
            })
            
        }
    }

    //get single Booking
    export const getBooking=async(req,res)=>{
        const id=req.params.id;
        try {
            const book=await Booking.findById(id);
            
            res.status(200).json({
                success:true,
                message:'successful',
                data:book
            })  
        } catch (err) {
            res.status(404).json({
                success:true,
                message:'Not found',
                
            })
        }
    }



    //get All Booking
    export const getAllBooking=async(req,res)=>{
        
        try {
            const books=await Booking.find();
            
            res.status(200).json({
                success:true,
                message:'successful',
                data:books
            })  
        } catch (err) {
            res.status(500).json({
                success:true,
                message:'internal server error',
                
            })
        }
    }