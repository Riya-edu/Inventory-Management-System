const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://riya-inveesync:riya-inveesync@cluster0.vvdl7v6.mongodb.net/Riya-InveeSync");

app.get("/", (req, res) => {
  res.send("Express is running");
});

const Item = mongoose.model("Item", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post('/addproduct', async (req, res) => {
  let items = await Item.find({});
  let id;
  if (items.length > 0) {
    let last_item_array = items.slice(-1);
    let last_item = last_item_array[0];
    id = last_item.id + 1;
  } else {
    id = 1;
  }
  const item = new Item({
    id: id,
    name: req.body.name,
    quantity: req.body.quantity,
    available: req.body.available,
  });

  console.log(item);
  await item.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post('/removeproduct', async (req, res) => {
  await Item.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get('/allproducts', async (req, res) => {
  let items = await Item.find({});
  console.log("All Products Fetched");
  res.send(items);
});



app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port " + port);
  } else {
    console.log("error: " + error);
  }
});
