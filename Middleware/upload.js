const multer = require("multer");
const {Cloudinarystorage} = require("multer-storage-cloudinary");
const cloudinary = require("../Config/cloudinary");


// Configure Cloudinary storage
const storage = new Cloudinarystorage({
  cloudinary: cloudinary,
  params: {
    folder: "justritesupermarket", // Specify the folder in Cloudinary where files will be stored
    allowedFormats: ["jpg", "jpeg", "png", "gif"], // Specify allowed file formats
  },
});