const Product = require('../../../models/product')
const User = require('../../../models/user')

const moment = require('moment')
const { session } = require('passport')

function vendorController() {
    return {

        async index(req, res) {
            const product = await Product.find({ customerId: req.user._id },
                null,
                { sort: { 'createdAt': -1 } })
            res.header('Cache-Control', 'no-store')
            res.render('vendor/listedProduct', { listedProd: product, moment: moment })
        },


        addproduct(req, res) {
            return res.render('vendor/addproduct')
        },

        async editProduct(req, res) {
            const { id} = req.params
            const data = await Product.findOne({'_id': `${ id }`})
            return res.render('vendor/editproducts', { data: data })
        },
        async posteditProduct(req, res) {
            const { id, name, categoryName, brand, price, size, containedLiquid, volume, piecePerPack, netQuantity, HSN, GST, itemWeight, description } = req.body
            Product.findByIdAndUpdate({ _id: id }, { name, categoryName, brand, price, size, GST, HSN, containedLiquid, volume, piecePerPack, netQuantity, description, itemWeight }, (err, data) => {
                if (!err) {
                    req.flash('error', 'Update Scessfully')
                    return res.redirect('/vendor/listedProduct')
                } else {
                    return res.redirect('/forgotpassword')
                }
            })
        }

    }
}


module.exports = vendorController