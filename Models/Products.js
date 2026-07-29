const mongose = require("mongoose");
const productSchema = new mongose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, 
{timestamps: true}
);

//create model from schema
const Product = mongose.model("Product", productSchema);