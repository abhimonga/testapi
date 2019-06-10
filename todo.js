var mong=require('mongoose');
var {mongoose}=require('./db/mongoose');
var moel=mong.model;

var Todo= new moel('Todo',{
    text:{
        type:String ,
        required:true,
        minlength:1
         },
    completed:{
        type:Boolean,
        default:false
    }
}
);
module.exports= {Todo}; 