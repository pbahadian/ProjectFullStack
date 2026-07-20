const { check, validationResult } = require ('express-validator');

const validatorCreateProduct = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("stock").exists().notEmpty(),
    check("category_id").exists().notEmpty(),
    check("image_url").exists().notEmpty(),
    (req, res, next) => {
        try{
            validationResult(req).throw()
            return next()
        }catch(error){
            res.status(403).json({errors: error.array()})
        }
    }
]

module.exports = { validatorCreateProduct }

