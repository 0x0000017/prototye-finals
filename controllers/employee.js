//import functions from Product model
import {
    getEmployees,
    getEmployeeById,
    insertEmployee,
    updateEmployeeById,
    deleteEmployeeById,
} from "../models/EmployeeModel.js";

//get all employee
export const showEmployees=(req,res)=>{
    getEmployees((err,results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

//get single employee
export const showEmployeeById = (req, res) => {
    getEmployeeById(req.params.id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
};

//create new employee
export const createEmployee = (req, res) => {
    const data = req.body;
    insertEmployee(data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  // Update employee
export const updateEmployee = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateEmployeeById(data, id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  // Delete employee
export const deleteEmployee = (req, res) => {
    const id = req.params.id;
    deleteEmployeeById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };