const express = require('express');

const routes = express.Router();

const hackersDetailModel = require('../models/hakerDetailSchema');

// route for gettting all hacker details 

routes.get('/',async (req,res)=>{
    console.log("get request...")
    try{
        const allHackerDetails = await hackersDetailModel.find()
        res.json(allHackerDetails)
    }catch(err){
        console.log("Error"+err)
    }
})

// route for posting  new  hacker details 

routes.post('/',async (req,res)=>{
    const newhacker = new hackersDetailModel({
        name:req.body.name,
        Age:req.body.Age,
        Qualification:req.body.Qualification,
        hackerType:req.body.hackerType,
        subscribed:req.body.subscribed
    })
try{
      const regHacker = await newhacker.save()
      res.json(regHacker)
}catch(err){
    console.log(err)
}
})

// route for getting the particular hacker details 

routes.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
    const findHacker = await hackersDetailModel.findById(id)
    res.send(findHacker)
    }catch(err){
        console.log(err);
    }
})

//route for delete the hacker details only one for tge request

routes.delete('/:id', async (req,res)=>{
    const hackerId = req.params.id;
    console.log(hackerId)
    try{
    const deletedHackerDetail = await hackersDetailModel.findOneAndRemove(hackerId)
    const remainingHackerDetails = await hackersDetailModel.find()
    res.send(remainingHackerDetails)
    }catch(err){
        console.log(err)
    }
    
})

//routes for updating the particular details

routes.patch('/:id',async (req,res)=>{
    const id = req.params.id
    const sub = req.body
    try{
    const updatedHackerDetails = await hackersDetailModel.findByIdAndUpdate(id, sub)
    const allHackers = await hackersDetailModel.find()
    res.send(allHackers)

}catch(err){
        console.log(err)
    }
})

module.exports = routes