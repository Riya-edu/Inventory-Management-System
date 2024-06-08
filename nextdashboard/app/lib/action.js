const port = 4000;
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

// Connecting MongoDB databse

mongoose.connect("mongodb+srv://edu4riya:edu4riy%40@cluster0.vvdl7v6.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0");


// Schema for product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ['available', 'out of stock'],
    default: 'available',
  },
});

// Schema for Orders

const Order = mongoose.model("Order", {
  id: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  createdat: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: String,
    enum: ['pending', 'cancelled', 'inprogress'],
    default: 'pending',
  },
});

// API End Point to add orders

app.post('/addorder', async (req, res) => {
  try {
    let orders = await Order.find({});
    let id;
    if (orders.length > 0) {
      let last_order = orders[orders.length - 1];
      id = last_order.id + 1;
    } else {
      id = 1;
    }
    const order = new Order({
      id: id,
      customerName: req.body.customerName,
      productName: req.body.productName,
      createdat: req.body.createdat,
      quantity: req.body.quantity,
      status: req.body.status,
    });

    console.log(order);
    await order.save();
    console.log("Saved");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

//API Endpoint to remove orders

app.post('/removeorder', async (req, res) => {
  try {
    await Order.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      id: req.body.id
    });
  } catch (error) {
    console.error("Error removing order:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to display all orders

app.get('/allorders', async (req, res) => {
  try {
    let orders = await Order.find({});
    console.log("All Orders Fetched");
    res.send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// Endpoint to fetch order details by orderId
app.get('/order/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = orders[orderId];

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Endpoint to add product
app.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product = products[products.length - 1];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      productName: req.body.productName,
      category: req.body.category,
      quantity: req.body.quantity,
      status: req.body.status,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to remove product

app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      id: req.body.id
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to display all products

app.get('/allproducts', async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on Port " + port);
  } else {
    console.log("error: " + error);
  }
});
