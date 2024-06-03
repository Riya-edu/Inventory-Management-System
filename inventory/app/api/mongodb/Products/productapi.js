const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");



app.use(express.json());
app.use(cors());

// Database Connection

mongoose.connect("mongodb+srv://riya-inveesync:riya-inveesync@cluster0.vvdl7v6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

//API creation

    app.get("/", (req, res)=>{
        res.send("Express is running")
    })

// Schema for creating products

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    available:{
        type:Boolean,
        default: true,
    },

})
app.post('/addproduct', async(req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        quantity:rea.body.quantity,
       
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


// Creating API for Product deletion from db

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name:req.body.name
    })
    
})

// Creating API for getting all products

app.get('/allproducts', async(req, res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//App will run Here
app.listen(port,(error)=>{
    if (!error) {
        console.log("Server is running on Port "+port)
    }
    else{
        console.log("error: "+error)
    }
})


