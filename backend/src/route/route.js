const { checkSchema } = require('express-validator')
const { adminCreate, getAllAdmins } = require('../controller/adminController')
const { login, logout } = require('../controller/authController')
const { createCategory, getAllCategories, getOneCategory, updateOneCategory, deleteOneCategory } = require('../controller/categoryController')
const { createMeal, getAllMeals, getOneMeal, updateOneMeal, deleteOneMeal } = require('../controller/mealController')
const { jwtAccessMiddleware } = require('../middleware/jwtAccessMiddleware')
const { categoryCreateValidationSchema } = require('../validationSchemas/categoryCreateValidationSchema')
const { categoryUpdateValidationSchema } = require('../validationSchemas/categoryUpdateValidationSchema')
const { createAdminValidationSchema } = require('../validationSchemas/adminCreateValidationSchema')
const { loginValidationSchema } = require('../validationSchemas/loginValidationSchema')
const { mealCreateValidationSchema } = require('../validationSchemas/mealCreateValidationSchema')
const { mealUpdateValidationSchema } = require('../validationSchemas/mealUpdateValidationSchema')

const router = require('express').Router()

router
    // Auth route.
    .post('/login', checkSchema(loginValidationSchema), login)
    .get('/logout', logout)

    // Admin route.
    .post('/admin-create', checkSchema(createAdminValidationSchema), adminCreate)
    .get('/admins', getAllAdmins)

    // Category route.
    .post('/category/create', checkSchema(categoryCreateValidationSchema), createCategory)
    .get('/category', getAllCategories)
    .get('/category/:id', getOneCategory)
    .post('/category/:id/update', checkSchema(categoryUpdateValidationSchema), updateOneCategory)
    .post('/category/:id/delete', deleteOneCategory)

    // Meal route.
    .post('/meal/create', checkSchema(mealCreateValidationSchema), createMeal)
    .post('/meal', getAllMeals)
    .post('/meal/:id', getOneMeal)
    .post('/meal/:id/update', checkSchema(mealUpdateValidationSchema), updateOneMeal)
    .post('/meal/:id/delete', deleteOneMeal)

module.exports = router