const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        sellerRole: { type: String, required: true },
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        size: {type: String, required: true},
        brand: {type: String, required: true},
        description: {type: String, required: true},
        piecePerPack: {type: Number, default: "Null"},
        categoryName: {type: String, required: true},
        itemWeight: {type: String, required: true},
        subCategory: {type: String, required: true},
        volume: {type: String, required: false },
        HSN :{type: Number, required: true },
        GST :{type: Number, required: true },
        netQuantity: {type: String, required: true},
        containedLiquid: {type: String, required: true},
        isverified: {type: String , default: "No"},
    },
    { timestamps: true }
);
module.exports = mongoose.model('Product', productSchema);
