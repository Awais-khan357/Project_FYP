const multer = require("multer");

const storage = multer.memoryStorage();
const uploadMemory = multer({ storage: storage });

module.exports = uploadMemory;
