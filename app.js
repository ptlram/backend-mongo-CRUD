import express from "express";
import mongoose from "mongoose";
import db from "./model/registermodel.js";

const app = express();
app.use(express.json());

app.get("/api/student", async (req, res) => {
   try {
      const result = await db.find()
      res.json(result);
   } catch (error) {
      res.json(error);
   }

})

app.get("/api/student/:id", async (req, res) => {
   try {
      const _id = req.params.id
      const data = await db.findById(_id)
      res.send(data);

   } catch (err) {
      res.send(err);
   }
})


app.post("/api/student", (req, res) => {
   const postman = new db(req.body)

   postman.save()
      .then(() => {
         res.send(postman)
      }).catch((err) => {
         res.send(err)
      })

})

app.patch("/api/student/:_id", async (req, res) => {
   try {
      const _id = req.params._id
      const up = await db.findByIdAndUpdate(_id,req.body)
      res.send(up);

   } catch (error) {
      res.send(error);
   }
})

app.delete("/api/student/:id",async(req,res)=>{
   try{
      const _id = req.params.id;
      const del = await db.findByIdAndDelete(_id)
      res.send(del)
   }
   catch(err){
         res.send(err)
   }
})

const mongo = mongoose.connect("mongodb://localhost:27017/pra")
   .then(() => {
      console.log("connected")
      app.listen(5000, () => {
         console.log("port 5000")
      })
   })
   .catch((err) => {
      console.log("not working")
   })

