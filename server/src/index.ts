#!/usr/bin/env ts-node

import express, { Request, Response, Application } from 'express';
import effectMapping from './controllers/imageProcessingController';
import multer from 'multer'
import cors from 'cors';


const port = process.env.PORT || 5000

const app: Application = express()
app.use(cors())

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.get('/', (req: Request, res: Response) => {
    res.json({
        youareattherightplace: true
    })
})

app.post('/:payload', upload.single('imageFile'), async (req: Request, res: Response) => {
    const effect: string = req.params.payload
    const imageBuffer = req.file?.buffer
    const b64Image: File = await effectMapping[effect](imageBuffer as Buffer) // convert to appropriate effect
    res.json({
        newURL: b64Image // its base64 mind you, must be converted to blob on the client for display purposes
    })
})


app.listen(port, () => {
    console.log("Server is fire @" + port)
})