const expreess = require('express');
const ContactController = require('../controller/ContactController');
const TeacherController = require('../controller/TeacherController');
const CourseController = require('../controller/CourseController');
const UsertModel = require('../model/User');
const UserController = require('../controller/UserControler');
const router=expreess.Router()
const checkAuth = require("../middleware/auth");
const BookingController = require('../controller/BookingController');



//contact
router.get('/contacts',ContactController.display);
router.post('/create',ContactController.create);
router.get('/view/:id',ContactController.view);
router.put('/update/:id',ContactController.update);
router.delete('/delete/:id',ContactController.delete);

//course
router.get('/coursedisplay',CourseController.display);
router.post('/coursecreate',CourseController.create);
router.get('/courseview/:id',CourseController.view);
router.put('/courseupdate/:id',CourseController.update);
router.delete('/coursedelete/:id',CourseController.delete);

//teacher
router.get('/teacher',TeacherController.display)
router.post('/teachercreate',TeacherController.create)

//User
router.post('/Register',UserController.register);
router.post('/Login',UserController.login);
router.get('/userprofile',checkAuth,UserController.profile);
router.get('/logout',UserController.logout);

//Booking
router.post('/booking/create/:courseId',checkAuth,BookingController.createBooking)
router.get('/booking/mybooking',checkAuth,BookingController.getUserbookings)
router.get('/booking/bookings',checkAuth,BookingController.getAllbookings)

module.exports=router