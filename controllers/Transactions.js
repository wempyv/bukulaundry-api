import Transactions from '../models/TransactionModel.js';

export const getAllTransaction = async (req, res) => {
    try {
        const transactions = await Transactions.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.json(transactions)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transactions.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(transaction[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createTransaction = async (req, res) => {
    try {
        await Transactions.create(req.body);
        res.json({
            message: "Berhasil menambahkan transaction baru"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateTransaction = async (req, res) => {
    try {
        await Transactions.update(req, body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Transaction berhasil di update" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteTransaction = async (req, res) => {
    try {
        await Transactions.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Transaction berhasil di hapus'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}