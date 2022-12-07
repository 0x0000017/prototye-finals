import db from "../config/database.js";

//get all employees
export const getEmployees=(result)=>{
    db.query("SELECT * FROM employee_stats WHERE isDeleted = 0", (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        } else{
            result(null,results);
        }
    });
};

//get single employee
export const getEmployeeById=(id,result)=>{
    db.query("SELECT * FROM PRODUCT WHERE emp_id = ? AND isDeleted = 0",
        [id],(err, results) =>{
            if(err){
                console.log(err);
                result(err,null);
            } else{
                result(null,results[0]);
            }
    });
}

//insert employee 
export const insertEmployee = (data, result) => {
    db.query("INSERT INTO employee_stats SET ?", 
    [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
  };

//UPDATE employee 
export const updateEmployeeById = (data, id, result) => {
    db.query("UPDATE employee_stats SET emp_name = ?, emp_salary = ?, emp_country = ?, emp_city = ? WHERE emp_id  = ?",
    [data.emp_name, data.emp_salary, data.emp_country, data.emp_city, id],
      (err, results) => {
            if (err) {
            console.log(err);
            result(err, null);
            } else {
            result(null, results);
            }
      }
    );
  };

//delete Employee just update isDeleted to 0
export const deleteEmployeeById=(id,result)=>{
    db.query("UPDATE employee_stats  SET isDeleted = 1 WHERE emp_id = ?",
    [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err,null);
        } else{
            result(null,results[0]);
        }
    });
}