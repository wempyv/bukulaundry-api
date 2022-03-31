import express from 'express';
import { getUsers, Register, Login, Logout, updateUser, getLaundryById } from '../controllers/Users.js';
import { getAllCustomer, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controllers/Customers.js'
import { getAllTransaction, getTransactionById, createTransaction, updateTransaction, deleteTransaction } from '../controllers/Transactions.js';
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

// Routes transactions
router.get('/transactions/:id', getAllTransaction);
router.get('/transaction/:id', getTransactionById);
router.post('/transaction', createTransaction);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);

router.get('/getlaundry/:id', getLaundryById);

export default router;