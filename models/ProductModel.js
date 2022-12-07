import db from "../config/database.js";

//get all products
export const getProducts=(result)=>{
    db.query("SELECT * FROM product WHERE isDeleted = 0", (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        } else{
            result(null,results);
        }
    });
};

//get single product
export const getProductById=(id,result)=>{
    db.query("SELECT * FROM PRODUCT WHERE product_id = ? AND isDeleted = 0",
        [id],(err, results) =>{
            if(err){
                console.log(err);
                result(err,null);
            } else{
                result(null,results[0]);
            }
    });
}

//insert product 
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", 
    [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
  };

//UPDATE product 
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
    [data.product_name, data.product_price, id],
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

//delete product just update isDeleted to 0
export const deleteProductById=(id,result)=>{
    db.query("UPDATE product  SET isDeleted = 1 WHERE product_id = ?",
    [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err,null);
        } else{
            result(null,results[0]);
        }
    });
}