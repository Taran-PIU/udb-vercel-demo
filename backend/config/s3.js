const {S3Client} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: "us-east-2",
    credentials:{
    accessKeyId: "AKIAR7HWX2PHYYSIJ26R",
    secretAccessKey: "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",
    },  
});

// SES_CONFIG ={ };

module.exports = s3;