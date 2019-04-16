const express = require('express');

const mongoose = require('mongoose');

// 链接mongo  并使用first-react这个集合
const DB_URL = 'mongodb://localhost:27017/first-react'
mongoose.connect(DB_URL, { useNewUrlParser: true },(err,res)=>{
    if(!err){
        console.log(res)
    }
})
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})
// 类似于mysql里面的表

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// 新增数据
// User.create({
//     user:'xiaoliang',
//     age:12
// },function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// 删除数据
//var id = '5ca4bc081b25412a58eed153';
// 根据id 删除数据 Model.findByIdAndRemove(id, [options], [callback])
// User.findByIdAndRemove(id, function(err,res){
//     if(err){
//         console.log('Error'+err)
//     }else{
//         console.log('Res'+res);
//     }
// })
// User.remove({age:20},function(err,doc){
//        if(!err){
//            console.log('delete sucess')
//        }
//     console.log(doc);// 打印文档
// })
//更新数据
// User.update({'user':'xiaoming'},{'$set':{age:28}}, function(e,d){
//     console.log(d)
// })
const app = express()
app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
    
})
app.listen(9093,function(){
    console.log('Node app start at port 9093')
})