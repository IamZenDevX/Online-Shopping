const ErrorHandler = require('../utils/default/errorHandler');
const category = require('../models/categoryModel');


exports.delete_Category = async (req, res, next) => {
    const { Category_ID } = req.params;
    const deletedcategory = await category.findByIdAndDelete(Category_ID);
    console.log("Category Is Deleted Successfully!!!");



}

exports.findCategory = async (req, res, next) => {
    const { categoryID } = req.params;
    let findCategory;
    try {
        findCategory = await category.findById(categoryID, 'CategoryName MainCategory Admin ');
    } catch (err) {
        const error = new ErrorHandler(
            'Error',
            401
        );
        return next(error);
    }
    res.json(findCategory);



}

exports.SaveCategory = async (req, res, next) => {
    const { Admin, CategoryName, MainCategory } = req.body;
    let createdcategory;
    createdcategory = new category({
        Admin,
        MainCategory,
        CategoryName,
    });
    try {
        await createdcategory.save();
    } catch (err) {
        const error = new ErrorHandler(
            'Category Is not Added!',
            401
        );
        return next(error);
    }
    res.json(createdcategory);



}

exports.Update_Category = async (req, res, next) => {
    const { Admin, CategoryName, MainCategory } = req.body;
    const { Category_ID } = req.params;
    const updatedcategory = await category.findByIdAndUpdate(Category_ID,
        {
            CategoryName: CategoryName,
            Admin: Admin,
            MainCategory: MainCategory
        }
        , { new: true });
    res.json(updatedcategory);



}




