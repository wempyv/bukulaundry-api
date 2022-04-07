import multer from 'multer';
import File from '../models/Image.js';

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

export const uploadImg = multer({ storage: storage }).single('image');

export const createFile = async (req, res) => {
    try {
        await File.create({
            transaction_id: req.body.transaction_id,
            image: req.file.path,
        });
        res.json({
            message: "Berhasil menambahkan image baru"
        });
    } catch (error) {
        res.json({ message: error.message })
    }
}