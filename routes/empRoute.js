const express = require("express");
const router = express.Router();

const {GetAllEmployees,createEmployee,DeleteEmployee, EditEmployee} = require("../controller/employees")

router.get('/',GetAllEmployees);
router.post('/',createEmployee);
router.delete('/:id',DeleteEmployee)
router.put('/:id',EditEmployee);

module.exports = router;