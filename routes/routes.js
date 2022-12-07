import express from "express";
import {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.js";
import {
    showEmployees,
    showEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controllers/employee.js";

const router = express.Router();

router.get("/products", showProducts);
router.get("/products/:id",showProductById);
router.post("/products", createProduct);
router.put("/products/:id",updateProduct);
router.delete("/products/:id",deleteProduct);

router.get("/employees", showEmployees);
router.get("/employees/:id",showEmployeeById);
router.post("/employees", createEmployee);
router.put("/employees/:id",updateEmployee);
router.delete("/employees/:id",deleteEmployee);

export default router;