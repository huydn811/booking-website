const Employee = require("../model/employee");

module.exports.getAllEmployee = (req,res) => {
    Employee.find()
    .then((employee) => {
        res.json(employee);
    })
    .catch((err)=> {
        res.status(400).send(err)
    })
};

module.exports.addEmployee = (req, res) => {
    let employee = new Employee ({
        employeeID : req.body.employeeID,
        nameEmployee : req.body.nameEmployee,
        emailEmployee : req.body.emailEmployee,
        roleEmployee : req.body.role,
        avatarEmployee : req.body.avatarEmployee,
        dayOfBirthEmployee : req.body.dayOfBirthEmployee,
        genderEmployee : req.body.genderEmployee,
        addressEmployee : req.body.addressEmployee,
        numberPhoneEmployee : req.body.numberPhoneEmployee,
    });
    employee.save()
    .then((employee) => {
        res.json(employee);
    })
    .catch((err) => {
        console.log(err, '[err]');
        res.status(400).send(err);
    })
};

module.exports.getEmployeeID = (req, res) => {
    let employeeID = req.params.employeeID;
    Employee.findOne({_id : employeeID})
    .then((employee) => {
        res.json(employee)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

module.exports.updateEmployee = (req, res) => {
    let employeeID  = req.params.employeeID;
    let updateEmployee = {
        employeeID : req.body.employeeID,
        nameEmployee : req.body.nameEmployee,
        emailEmployee : req.body.emailEmployee,
        roleEmployee : req.body.role,
        avatarEmployee : req.body.avatarEmployee,
        dayOfBirthEmployee : req.body.dayOfBirthEmployee,
        genderEmployee : req.body.genderEmployee,
        addressEmployee : req.body.addressEmployee,
        numberPhoneEmployee : req.body.numberPhoneEmployee,
    };
    Employee.findByIdAndUpdate({_id : employeeID}, {$set : updateEmployee})
    .then((employee) => {
        res.json(employee);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
};

module.exports.deleteEmployee = (req, res) => {
    let employeeID = req.params.employeeID;
    Employee.findByIdAndDelete({_id : employeeID})
    .then((employee) => {
        res.json(employee)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}