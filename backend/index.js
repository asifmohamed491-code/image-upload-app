const express = require("express");
const app = express();
const multer = require('multer');
const cors = require('cors');

require("dotenv").config();

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// multer+cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "uploads",
        allowed_formats: ["jpg","png","jpeg","webp"]
    }
});

const upload =
multer({
 storage,
 limits:{
  fileSize:
  2*1000*1000
 }
});

app.post("/upload",upload.single("file"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"No file"});
    }
    res.json({message:"Upload Success",image:req.file.path});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server at running ${PORT}`);
});