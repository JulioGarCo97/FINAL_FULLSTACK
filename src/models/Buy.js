const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({  
  nameClient: {
    type: String,
    required: true
  },
  dniClient: {
    type: String,
    required: true
  },
  directionClient: {
    type: String,
    required: true
  },
  countryClient: {
    type: String,
    required: true
  },
  emailClient: {
    type: String,
    required: true
  },
  dateSend: {
    type: String,
    required: true
  },
  typePay: {
    type: String,
    required: false,
    default: 'Efectivo'
    },
  description: {
    type: String,
    required: false
    },
product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },      
totalAmount: {
    type: Number,
    required: true,
  },
created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Buy", OrderSchema);
