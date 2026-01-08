const express = require("express");
const router= express.Router();
const upload = require("../middleware/upload");
const { uploadImages } = require("../controller/filehandle");

router.post('/getimage',upload.single("img"),uploadImages);

module.exports = router;