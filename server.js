var express=require('express');
var bp=require('body-parser');
 var {mongoose}=require('./db/mongoose');
var {Todo}=require('./todo');

var app=express();
app.use(bp.json());
console.log("success.....");
app.post('/todos',(req,res)=>{
    console.log("success.....");
 var todo=new Todo({
   text:req.body.text
});
todo.save().then((doc)=>{
  res.send(doc);
  console.log("success.....");
},(err)=>{
    res.send(err);
});

});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
       res.send({todos});
    },(error)=>{
       console.log(error);
    });
});
app.listen(3000,()=>{
   console.log('Connection successful');
}
);

