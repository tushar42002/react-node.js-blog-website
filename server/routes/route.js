import express from 'express';

import upload from '../middleware/image.js';
import { signupUser, loginUser, updateUser, deleteUser } from '../controller/user-controller.js';
import { addPost, updatePost, deletePost, getPost, getPostWithId } from '../controller/post.js';
import { addCategory, deleteCategory, getCategory, updateCategory } from '../controller/category.js';



const router = express.Router();


// user routes

router.post('/signup', upload.single("image"), signupUser);
router.post('/login', loginUser);
router.post('/updateuser', updateUser);
router.get('/deleteuser/:id', deleteUser);

// post or blog routes

router.post('/addpost', upload.single("image"), addPost);
router.get('/deletepost/:id', deletePost);
router.post('/updatepost', upload.single("image"), updatePost);
router.get('/getpost', getPost);
router.get('/getpost2', getPostWithId);
router.get('/getpost2/:id', getPostWithId);

// gategory routes

router.get('/getcategory', getCategory);
router.post('/addcategory', addCategory);
router.get('/deletecategory/:id', deleteCategory);
router.post('/updatecategory', updateCategory);

export default router;  