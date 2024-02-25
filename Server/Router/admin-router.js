const express = require("express");
const authMiddleware = require("../middleware/auth-middleware")
const adminController = require("../Controllers/admin-controller")
const adminMiddleware = require("../middleware/admin-middleware")
const router = express.Router()


router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAlluser)

router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)

router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById)
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllcontact)
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteByIdContact)
module.exports = router;