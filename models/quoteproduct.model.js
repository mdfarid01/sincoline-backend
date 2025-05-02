import mongoose from "mongoose";

const quoteProductSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'product'
    },
    quantity : {
        type : Number,
        default : 1
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    email: {
        type : String,
        default : ""
    },
    mobile: {
        type : Number,
        default : null
    },
},{
    timestamps : true
})

const QuoteProductModel = mongoose.model('quoteProduct',quoteProductSchema)

export default  QuoteProductModel