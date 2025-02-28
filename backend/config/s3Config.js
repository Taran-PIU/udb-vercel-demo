const s3 = require('./s3');
const multer = require('multer');
const multerS3 = require("multer-s3");

const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: (req,file,cb)=>{
            cb(null,{fieldName:file.fieldname});
        },
        key:(req,file,cb)=>{
            cb(null,`profiles/${Date.now()}_${file.originalname}`);
        },
        contentType: multerS3.AUTO_CONTENT_TYPE,
    }),
});

module.exports = uploadS3;