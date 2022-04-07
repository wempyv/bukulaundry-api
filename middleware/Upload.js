import multer from 'multer';

const imageFilter = (req, res, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb('Please upload only images.', false)
    }
};

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    filename: (req, res, cb) => {
        cb(null, `${Date.now()}-bezkoder-${file.orginalname}`);
    }
});

let uploadFile = multer({ storage: storage, fileFilter, imageFilter });
module.exports = uploadFile