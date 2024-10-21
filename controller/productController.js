const ErrorHandler = require('../utils/default/errorHandler');
const product = require('../models/productModel');


exports.deleteproduct = async (req, res, next) => {
  const { productID } = req.params;
  try {
    const deletedproduct = await product.findByIdAndDelete(productID);
  } catch (err) {
    const error = new ErrorHandler(
      'product is not Deleted !',
      403
    );
    return next(error);
  }
  console.log("Successfully Deleted !");



}

exports.Find_storemanager_product = async (req, res, next) => {
  const { stockmanagerid } = req.params;
  let findstockproduct;
  findstockproduct = await product.findById(stockmanagerid, 'subcategory image maincategory description price quantity stockmanagerid ');
  res.send(findstockproduct);



}

exports.findAllproduct = async (req, res, next) => {
  let FindAllProducts;
  try {
    FindAllProducts = await product.find({}, 'subcategory quantity stockmanagerid maincategory price image description ');
  } catch (err) {
    const error = new ErrorHandler(
      'All Product is not Found !',
      500
    );
    return next(error);
  }
  res.json(FindAllProducts);



}

exports.FindProduct = async (req, res, next) => {
  const { ProductID } = req.params;
  let FIndProduct;
  try {
    FIndProduct = await product.findById(ProductID, 'subcategory stockmanagerid description quantity maincategory image price ');
  } catch (err) {
    const error = new ErrorHandler(
      'Product is not Found !',
      401
    );
    return next(error);
  }
  res.json(FIndProduct);



}

exports.saveproducts = async (req, res, next) => {
  const { description, image, maincategory, price, quantity, stockmanagerid, subcategory } = req.body;
  let createdproduct;
  createdproduct = new product({
    image,
    price,
    description,
    stockmanagerid,
    maincategory,
    subcategory,
    quantity,
  });
  await createdproduct.save();
  res.json(createdproduct);



}

exports.Update_Product = async (req, res, next) => {
  const { description, image, maincategory, price, stockmanagerid, quantity, subcategory } = req.body;
  const { productid } = req.params;
  try {
    const updatedproduct = await product.findByIdAndUpdate(productid,
      {
        price: price,
        stockmanagerid: stockmanagerid,
        quantity: quantity,
        image: image,
        description: description,
        subcategory: subcategory,
        maincategory: maincategory
      }
      , { new: true });
  } catch (err) {
    const error = new ErrorHandler(
      'product Is not update!',
      400
    );
    return next(error);
  }
  res.json(updatedproduct);



}




