import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const router = express.Router();

let gfs;
let gridFSBucket;

// Helper function to get or initialize GridFSbucket
const getGfs = async () => {
  if (gfs && gridFSBucket) return { gfs, gridFSBucket };

  if (mongoose.connection.readyState !== 1) {
    // wait for connection to be ready
     await new Promise((resolve) => {
        mongoose.connection.once("open", resolve)
    });
  }
   
  if (!gridFSBucket) {
       gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: "uploads",
      });
      gfs = gridFSBucket;
  }

  return { gfs, gridFSBucket };
};


const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/single", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  try {
     const { gridFSBucket } = await getGfs();

      const filename = `${uuidv4()}-${Date.now()}${path.extname(
        req.file.originalname
      )}`;
      const stream = gridFSBucket.openUploadStream(filename, {
        contentType: req.file.mimetype,
      });

      stream.end(req.file.buffer, (err) => {
        if (err) {
          console.error("Error uploading file:", err);
          return res.status(500).send({ message: "Error uploading file" });
        }
        res
          .status(200)
          .send({ message: "Image uploaded successfully", image: filename });
      });
  } catch(error) {
       console.error("GridFS Init Error:", error);
       return res.status(500).send({ message: "Server Error" });
  }
});

router.post("/multiple", upload.array("images", 10), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ message: "No files uploaded" });
  }

    try {
        const { gridFSBucket } = await getGfs();
        const uploadedFiles = [];
        let filesProcessed = 0;

        req.files.forEach((file) => {
            const filename = `${uuidv4()}-${Date.now()}${path.extname(
            file.originalname
            )}`;
            const stream = gridFSBucket.openUploadStream(filename, {
            contentType: file.mimetype,
            });

            stream.end(file.buffer, (err) => {
            filesProcessed += 1;
            if (err) {
                console.error("Error uploading file:", err);
                if (filesProcessed === req.files.length) {
                return res.status(500).send({ message: "Error uploading files" });
                }
            } else {
                uploadedFiles.push(filename);
                if (filesProcessed === req.files.length) {
                res.status(200).send({
                    message: "Images uploaded successfully",
                    images: uploadedFiles,
                });
                }
            }
            });
        });
    } catch (error) {
        console.error("GridFS Init Error", error);
        return res.status(500).send({ message: "Server Error" });
    }
});

router.get("/:filename", async (req, res) => {
  const { filename } = req.params;
  console.log(`Fetching file: ${filename}`);

  try {
     const { gfs } = await getGfs();

    const files = await gfs.find({ filename }).toArray();
    if (!files || files.length === 0) {
      return res.status(404).send({ message: "No files found" });
    }

    console.log(`File found: ${filename}`);
    const readStream = gfs.openDownloadStreamByName(filename);
    readStream.on("error", (error) => {
      console.error("Error streaming file:", error);
      res.status(500).send({ message: "Error streaming file" });
    });
    readStream.pipe(res).on("finish", () => {
      console.log(`Finished streaming file: ${filename}`);
    });
  } catch (err) {
    console.error("Error finding file:", err);
    res.status(500).send({ message: "Error finding file" });
  }
});

export default router;
