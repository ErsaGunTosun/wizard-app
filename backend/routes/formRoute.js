const {
    newForm,
} = require("../controllers/formController");

const router = require("express").Router();


router.post("/new",newForm);


module.exports = router;