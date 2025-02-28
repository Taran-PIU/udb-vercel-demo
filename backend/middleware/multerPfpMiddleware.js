// const upload = require('../config/multerConfig');
// const uploadS3 = require("../config/s3Config");

const uploadFile = (req, res, next) => {
  upload.single('pfp')(req, res, function (err) {
    if (err) {
      console.error('Multer error:', err);
      return res.status(400).json({ error: err.message });
    }
    if (!req.file) {
      console.error('File not received!');
      return res
        .status(400)
        .json({ error: 'File upload failed. No file received.' });
    }

    console.log('Uploaded file:', req.file);
    console.log('Request body:', req.body);
    next();
  });
};

//nst uploadPic = (req, res, next) => {
//   uploadS3.single('pfp')(req, res, function (err) {
//     if (err) {
//       console.error('Multer-S3 error:', err);
//       return res.status(400).json({ error: err.message });
//     }
//     if (!req.file) {
//       console.error('File not received! Multer-S3');
//       return res
//         .status(400)
//         .json({ error: 'File upload failed. No file received. Multer-S3' });
//     }

//     console.log('Uploaded file: Multer-S3', req.file);
//     console.log('Request body: Multer-S3', req.body);
//     next();
//   });
// };

const uploadRes = (req, res, next) => {
  upload.single('resume')(req, res, function (err) {
    if (err) {
      console.error('Multer error:', err);
      return res.status(400).json({ error: err.message });
    }
    if (!req.file) {
      console.error('File not received!');
      return res
        .status(400)
        .json({ error: 'File upload failed. No file received.' });
    }

    console.log('Uploaded file:', req.file);
    console.log('Request body:', req.body);
    next();
  });
};

module.exports = { uploadFile, uploadRes};
