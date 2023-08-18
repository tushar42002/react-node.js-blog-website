import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        let name = file.originalname;
        cb(null, `${Date.now()}-${name.substring(name.length - 10, name.length)}`)
    }
})

const upload = multer({ storage });

export default upload;