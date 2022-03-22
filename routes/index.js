import express from 'express';
import { getUsers, Register, Login, Logout, updateUser } from '../controllers/Users.js';
import { getAllCustomer, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controllers/Customers.js'
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
const router = express.Router();

// Routes Auth
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.patch('/users/:id', updateUser);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Routes Customers
router.get('/customers/:id', getAllCustomer);
router.get('/customer/:id', getCustomerById);
router.post('/customer', createCustomer);
router.patch('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);

export default router;