const Menu = require('../../models/product');
const Category = require('../../models/categories')
const subCategory = require('../../models/subcategory')


function homeController() {
    return {
        index(req, res) {
            res.render('home')
        },

        pripolicy(req, res) {
            res.render('footerDocu/privacy & policy')
        },

        termcondition(req, res) {
            res.render('footerDocu/T & C')
        },

        async grandIndex(req, res) {
            if (req.body.pcategory == undefined) {
                // console.log('Home Controller line no. 17');   
            } else {
                // console.log(req.body.pcategory);
            }
            var parentCat = "Glassware"
            const nashta = await Category.find()
            const pani = await subCategory.find({ 'parentCategory': `${parentCat}` })
            return res.render('grandHome', { nashta: nashta, pani: pani })
        },

        fetch(req, res, next) {
            var regex = new RegExp(req.query["term"], 'i');

            var productFilter = Menu.find({ $or: [{ "name": { "$in": [regex] } }, { "categoryName": { "$in": [regex] } }] }, { 'categoryName': 1, 'name': 1, }).sort({ "updated_at": -1 }).sort({ "created_at": -1 }).limit(10);
            productFilter.exec(function (err, data) {
                var result = [];
                if (data) {
                    if (data && data.length && data.length > 0) {
                        data.forEach(product => {

                            var label = product.name
                            var label1 = product.categoryName
                            result.push(label, label1)
                        });

                    }
                    var uniqueString = [...new Set(result)]
                    res.jsonp(uniqueString);
                }else{
                    res.jsonp(result)
                }

            });
        }
    }
}

module.exports = homeController