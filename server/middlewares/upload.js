import multer from "multer";
import path from "path";

//Set up Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        const uniqueName = Date.now() + "_" + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    },
});

//File Type Filter (Only Image)
const fileFilter = (req, file, cb) =>{
    if(file.mimetype.startsWith("image/")){
        cb(null, true);
    }else{
        cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({storage, fileFilter});

export default upload;