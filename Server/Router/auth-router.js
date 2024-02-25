const express = require('express')
const router = express.Router()
// const {home,register} = require("../Controllers/auth-controller")
const authController = require("../Controllers/auth-controller")
const authMiddleware = require("../middleware/auth-middleware")

router.route("/").get(authController.home)

router.route("/register").post(authController.register)

router.route("/login").post(authController.login)
router.route("/user").get(authMiddleware, authController.user);


  module.exports = router;