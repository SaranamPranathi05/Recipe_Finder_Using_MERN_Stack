

const express=require('express');

const router=express.Router();


const{recipedata}=require('../controllers/recipecontroller');  

router.get('/all',recipedata);


module.exports=router;

