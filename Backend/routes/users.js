import express from 'express';
import { deleteUser, getAllUser,  getSingleUser,  updateUser } from '../contollers/userController.js';



const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';



//update user
router.put('/:id',updateUser);

// delete user
router.delete('/:id',deleteUser);


//get single user
router.get('/:id',getSingleUser);

//get all  user
router.get('/',getAllUser);

export default router;