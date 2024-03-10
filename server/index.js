import { MongoClient } from 'mongodb'

const express = require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello klu</h1>')

})

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')

})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is contact page</h1>')

})

app.post('/home',(req,res)=>{
    res.send('<h1>This is contact page</h1>')

})

app.listen(8080, ()=>{console.log('Express server is running')})

app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})
