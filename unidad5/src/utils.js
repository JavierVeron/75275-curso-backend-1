import {fileURLToPath} from "url";
import {dirname} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

// Utils para Multer
/* import multer from "multer";
const __dirname = "C:/xampp/htdocs/coderhouse/75275/unidad5/src/";

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, __dirname + "/public/images");
    },
    filename:(req, file, cb) => {
        cb(null, file.originalname);
    },
});

export const uploader = multer({storage});
export default __dirname; */