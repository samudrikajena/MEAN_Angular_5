// controller to get the request hence we need express 

const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// We need db model too hence import local model file
const { Employee } = require("../models/employee")

// To get all data from employees collection from db
// => localhost:3000//employees/
router.get('/',
    (req, res) => {
        Employee.find(
            (err, data) => { // callback function
                if (!err)
                    res.send(data)
                else
                    console.log(`Error in retriving data ${JSON.stringify(err, undefined, 2)}`)
            }
        );
    }
);

// => localhost:3000//employees/:id
router.get('/:id',
    (req, res) => {
        var reqId = req.params.id;
        if (!ObjectId.isValid(reqId))
            return res.status(400).send(`No record with given id :' + ${reqId}`)
        Employee.findById(reqId,
            (err, data) => {
                if (!err)
                    res.send(data)
                else
                    console.log(`Error in finding employee id ${JSON.stringify(err, undefined, 2)}`)
            }
        );
    }
);

// Push record to employee collection
// => localhost:3000//employees/ - from postman
router.post('/',
    (req, res) => {
        // Instanciate Employee class
        var emp = new Employee(
            {
                name: req.body.name,
                position: req.body.position,
                office: req.body.office,
                salary: req.body.salary
            }
        );
        emp.save(
            (err, data) => {
                if (!err)
                    res.send(data);
                else
                    console.log(`Error in Employee save ${JSON.stringify(err, undefined, 2)}`);
            }

        );
    }
);

// Update record
// => localhost:3000//employees/:id
router.put('/:id',
    (req, res) => {
        var reqId = req.params.id;
        if (!ObjectId.isValid(reqId))
            return res.status(400).send(`No record with given id :' + ${reqId}`)
        var updateDetails = {
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
        }
        Employee.findByIdAndUpdate(reqId, { $set: updateDetails }, { new: true },
            (err, data) => {
                if (!err)
                    res.send(data);
                else
                    console.log(`Error in Employee Update ${JSON.stringify(err, undefined, 2)}`);
            }
        );
    }
);

//delete record
// => localhost:3000//employees/:id
router.delete('/:id',
    (req, res) => {
        var reqId = req.params.id;
        if (!ObjectId.isValid(reqId))
            return res.status(400).send(`No record with given id :' + ${reqId}`)
        Employee.findByIdAndRemove(reqId,
            (err, data) => {
                if (!err)
                    res.send(data);
                else
                    console.log(`Error in Employee Delete ${JSON.stringify(err, undefined, 2)}`);
            }
        );
    }
);

module.exports = router;