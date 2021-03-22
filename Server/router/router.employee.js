const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employee.controller");

router.get("/get-all-employee", employeeController.getAllEmployee);
router.post("/add-employee", employeeController.addEmployee);
router.get("/get-employeeid/:employeeID", employeeController.getEmployeeID);
router.put("/update-employee/:employeeID", employeeController.updateEmployee);
router.delete("/delete-employee/:employeeID", employeeController.deleteEmployee);

module.exports = router;